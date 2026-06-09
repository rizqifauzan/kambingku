import { ScrollView, Text, View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { translations } from "@/constants/translations";

export default function HomeScreen() {
  const colors = useColors();

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
          {/* Dashboard Title */}
          <View className="gap-1 mb-2">
            <Text className="text-3xl font-bold text-foreground">Dashboard MABIS</Text>
            <Text className="text-sm text-muted">{translations.overviewAndAlerts}</Text>
          </View>

          {/* Alert Cards */}
          <View className="gap-3">
            {/* Attention Required Alert */}
            <Pressable className="bg-error rounded-lg p-4 flex-row items-start gap-3 active:opacity-80">
              <View className="w-10 h-10 rounded-full bg-red-100 items-center justify-center flex-shrink-0">
                <MaterialIcons name="warning" size={20} color="#DC2626" />
              </View>
              <View className="flex-1 gap-1">
                <Text className="text-base font-bold text-white">{translations.attentionRequired}</Text>
                <Text className="text-sm text-red-50">
                  {translations.attentionRequiredDesc}
                </Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="white" />
            </Pressable>

            {/* Batch Closure Alert */}
            <Pressable className="bg-info rounded-lg p-4 flex-row items-start gap-3 active:opacity-80">
              <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                <MaterialIcons name="info" size={20} color="#2563EB" />
              </View>
              <View className="flex-1 gap-1">
                <Text className="text-base font-bold text-white">{translations.batchClosurePending}</Text>
                <Text className="text-sm text-blue-50">
                  {translations.batchClosurePendingDesc}
                </Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="white" />
            </Pressable>
          </View>

          {/* Financial Stats */}
          <View className="flex-row gap-3 mt-2">
            {/* Profit Card */}
            <View className="flex-1 bg-surface rounded-lg p-4 border border-border">
              <Text className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                {translations.profitJune}
              </Text>
              <Text className="text-2xl font-bold text-foreground mb-2">Rp 8.5M</Text>
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="trending-up" size={16} color="#16A34A" />
                <Text className="text-sm font-semibold text-success">+12%</Text>
              </View>
            </View>

            {/* Managed Funds Card */}
            <View className="flex-1 bg-surface rounded-lg p-4 border border-border">
              <Text className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                {translations.managedFunds}
              </Text>
              <Text className="text-2xl font-bold text-foreground mb-2">Rp 245M</Text>
              <View className="flex-row items-center gap-1">
                <View className="w-2 h-2 rounded-full bg-primary" />
                <Text className="text-sm font-semibold text-muted">{translations.stable}</Text>
              </View>
            </View>
          </View>

          {/* Active Operations */}
          <View className="mt-4 gap-3">
            <Text className="text-xs font-semibold text-muted uppercase tracking-wider">
              {translations.activeOperations}
            </Text>

            <View className="bg-surface rounded-lg border border-border overflow-hidden">
              {/* Breeding Goats */}
              <Pressable className="flex-row items-center justify-between p-4 border-b border-border active:bg-background">
                <View className="flex-row items-center gap-3 flex-1">
                  <View className="w-10 h-10 rounded-lg bg-primary/10 items-center justify-center">
                    <MaterialIcons name="pets" size={20} color={colors.primary} />
                  </View>
                  <Text className="text-base font-semibold text-foreground">{translations.breedingGoats}</Text>
                </View>
                <Text className="text-lg font-bold text-primary">12</Text>
              </Pressable>

              {/* Fattening Batches */}
              <Pressable className="flex-row items-center justify-between p-4 border-b border-border active:bg-background">
                <View className="flex-row items-center gap-3 flex-1">
                  <View className="w-10 h-10 rounded-lg bg-primary/10 items-center justify-center">
                    <MaterialIcons name="trending-up" size={20} color={colors.primary} />
                  </View>
                  <Text className="text-base font-semibold text-foreground">{translations.fatteningBatches}</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Text className="text-lg font-bold text-primary">3</Text>
                  <Text className="text-sm text-muted">(45)</Text>
                </View>
              </Pressable>

              {/* Qurban Prep */}
              <Pressable className="flex-row items-center justify-between p-4 active:bg-background">
                <View className="flex-row items-center gap-3 flex-1">
                  <View className="w-10 h-10 rounded-lg bg-primary/10 items-center justify-center">
                    <MaterialIcons name="event" size={20} color={colors.primary} />
                  </View>
                  <Text className="text-base font-semibold text-foreground">{translations.qurbanPrep}</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Text className="text-lg font-bold text-primary">2</Text>
                  <Text className="text-sm text-muted">(30)</Text>
                </View>
              </Pressable>
            </View>
          </View>

          {/* Investor Overview */}
          <View className="mt-4 gap-3 mb-4">
            <View className="flex-row items-center justify-between">
              <Text className="text-xs font-semibold text-muted uppercase tracking-wider">
                {translations.investorOverview}
              </Text>
              <Pressable>
                <Text className="text-xs font-semibold text-primary">{translations.viewAll}</Text>
              </Pressable>
            </View>

            <View className="bg-surface rounded-lg border border-border overflow-hidden">
              {/* Investor 1: Siti */}
              <View className="flex-row items-center justify-between p-4 border-b border-border">
                <View className="flex-row items-center gap-3 flex-1">
                  <View className="w-10 h-10 rounded-full bg-primary items-center justify-center">
                    <Text className="text-white font-bold">S</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-sm font-semibold text-foreground">Siti</Text>
                    <Text className="text-xs text-muted">2 BATCHES</Text>
                  </View>
                </View>
                <Text className="text-sm font-bold text-foreground">Rp 15.4M</Text>
              </View>

              {/* Investor 2: Budi */}
              <View className="flex-row items-center justify-between p-4 border-b border-border">
                <View className="flex-row items-center gap-3 flex-1">
                  <View className="w-10 h-10 rounded-full bg-error items-center justify-center">
                    <Text className="text-white font-bold">B</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-sm font-semibold text-foreground">Budi</Text>
                    <Text className="text-xs text-error font-semibold">ALERT</Text>
                  </View>
                </View>
                <Text className="text-sm font-bold text-error">- Rp 2.5M</Text>
              </View>

              {/* Investor 3: Ahmad */}
              <View className="flex-row items-center justify-between p-4">
                <View className="flex-row items-center gap-3 flex-1">
                  <View className="w-10 h-10 rounded-full bg-primary items-center justify-center">
                    <Text className="text-white font-bold">A</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-sm font-semibold text-foreground">Ahmad</Text>
                    <Text className="text-xs text-muted">1 BATCH</Text>
                  </View>
                </View>
                <Text className="text-sm font-bold text-foreground">Rp 8.2M</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
