import { useState, useMemo } from "react";
import { ScrollView, Text, View, Pressable, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { translations } from "@/constants/translations";
import { investorsData, type Investor } from "@/constants/investorData";

export default function InvestorsScreen() {
  const colors = useColors();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInvestors = useMemo(() => {
    return investorsData.filter((investor) =>
      investor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const renderInvestorCard = (investor: Investor) => {
    const isAlert = investor.status === "alert";
    const borderColor = isAlert ? "#8B3A3A" : "#2D7A4A";

    return (
      <View
        key={investor.id}
        className="bg-surface rounded-lg p-4 mb-3 border-l-4"
        style={{ borderLeftColor: borderColor }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between mb-3">
          <View className="flex-row items-center gap-3 flex-1">
            <View
              className="w-10 h-10 rounded-full items-center justify-center"
              style={{ backgroundColor: borderColor }}
            >
              <Text className="text-white font-bold text-sm">{investor.name.charAt(0)}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-base font-bold text-foreground">{investor.name}</Text>
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="check-circle" size={12} color={colors.muted} />
                <Text className="text-xs text-muted">
                  {investor.activeCount} {translations.active}
                </Text>
              </View>
            </View>
          </View>
          <Pressable className="p-2">
            <MaterialIcons name="more-vert" size={20} color={colors.foreground} />
          </Pressable>
        </View>

        {/* Balance Info */}
        <View className="gap-3 mb-3">
          {investor.currentBalance !== 0 && (
            <View className="flex-row justify-between">
              <Text className="text-xs font-semibold text-muted uppercase tracking-wider">
                {translations.balanceAtThisTime}
              </Text>
              <Text
                className="text-sm font-bold"
                style={{ color: investor.currentBalance < 0 ? "#DC2626" : colors.foreground }}
              >
                Rp {Math.abs(investor.currentBalance).toLocaleString("id-ID")}
              </Text>
            </View>
          )}

          {investor.investmentBalance !== 0 && (
            <View className="flex-row justify-between">
              <Text className="text-xs font-semibold text-muted uppercase tracking-wider">
                {translations.investmentBalance}
              </Text>
              <Text className="text-sm font-bold text-foreground">
                Rp {investor.investmentBalance.toLocaleString("id-ID")}
              </Text>
            </View>
          )}

          {investor.totalModal !== 0 && (
            <View className="flex-row justify-between">
              <Text className="text-xs font-semibold text-muted uppercase tracking-wider">
                {translations.totalModal}
              </Text>
              <Text className="text-sm font-bold text-foreground">
                Rp {investor.totalModal.toLocaleString("id-ID")}
              </Text>
            </View>
          )}
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-2 flex-wrap">
          {investor.programs.includes("breeding") && (
            <Pressable className="flex-1 bg-primary/10 rounded-full py-2 px-3 items-center active:opacity-70">
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="check-circle" size={14} color={colors.primary} />
                <Text className="text-xs font-semibold text-primary">{translations.breedingProgram}</Text>
              </View>
            </Pressable>
          )}

          {investor.programs.includes("fattening") && (
            <Pressable className="flex-1 bg-primary/10 rounded-full py-2 px-3 items-center active:opacity-70">
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="trending-up" size={14} color={colors.primary} />
                <Text className="text-xs font-semibold text-primary">{translations.fatteningProgram}</Text>
              </View>
            </Pressable>
          )}

          {investor.programs.includes("qurban") && (
            <Pressable className="flex-1 bg-error/10 rounded-full py-2 px-3 items-center active:opacity-70">
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="event" size={14} color={colors.error} />
                <Text className="text-xs font-semibold text-error">{translations.qurbanEvent}</Text>
              </View>
            </Pressable>
          )}
        </View>
      </View>
    );
  };

  return (
    <ScreenContainer className="bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 py-4 border-b border-border">
          <View className="flex-row items-center gap-2">
            <View className="w-10 h-10 rounded-full bg-primary items-center justify-center">
              <Text className="text-white font-bold text-lg">A</Text>
            </View>
            <Text className="text-lg font-semibold text-foreground">AgroLink Manager</Text>
          </View>
          <Pressable>
            <MaterialIcons name="notifications" size={24} color={colors.foreground} />
          </Pressable>
        </View>

        {/* Main Content */}
        <View className="px-4 py-4 gap-4">
          {/* Title */}
          <View className="gap-1">
            <Text className="text-3xl font-bold text-foreground">{translations.manageInvestor}</Text>
          </View>

          {/* Search Bar */}
          <View className="bg-surface rounded-full px-4 py-3 flex-row items-center gap-2 border border-border">
            <MaterialIcons name="search" size={20} color={colors.muted} />
            <TextInput
              placeholder={translations.searchInvestor}
              placeholderTextColor={colors.muted}
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="flex-1 text-foreground"
              style={{ color: colors.foreground }}
            />
          </View>

          {/* Divider */}
          <View className="h-1 bg-primary rounded-full" />

          {/* Investors List */}
          <View className="gap-2 pb-20">
            {filteredInvestors.length > 0 ? (
              filteredInvestors.map((investor) => renderInvestorCard(investor))
            ) : (
              <View className="items-center justify-center py-8">
                <MaterialIcons name="search-off" size={48} color={colors.muted} />
                <Text className="text-muted mt-2">Investor tidak ditemukan</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <Pressable className="absolute bottom-20 right-4 w-14 h-14 rounded-full bg-primary items-center justify-center active:opacity-80 shadow-lg">
        <MaterialIcons name="add" size={28} color="white" />
      </Pressable>
    </ScreenContainer>
  );
}
