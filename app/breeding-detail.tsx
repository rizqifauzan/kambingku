import { ScrollView, Text, View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { breedingBatchesData } from "@/constants/breedingData";

export default function BreedingDetailScreen() {
  const colors = useColors();
  const router = useRouter();
  const { batchId } = useLocalSearchParams();

  const batch = breedingBatchesData.find((b) => b.id === batchId);

  if (!batch) {
    return (
      <ScreenContainer className="items-center justify-center">
        <Text className="text-foreground">Batch not found</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer className="bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 py-4 border-b border-border">
          <View className="flex-row items-center gap-3 flex-1">
            <Pressable onPress={() => router.back()} className="p-2">
              <MaterialIcons name="arrow-back" size={24} color={colors.foreground} />
            </Pressable>
            <Text className="text-lg font-semibold text-foreground">Breeding Detail</Text>
          </View>
          <Pressable className="p-2">
            <MaterialIcons name="more-vert" size={24} color={colors.foreground} />
          </Pressable>
        </View>

        {/* Main Content */}
        <View className="px-4 py-4 gap-4">
          {/* Batch Code & Status */}
          <View className="bg-surface rounded-lg p-4 border border-border">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-2xl font-bold text-foreground">{batch.code}</Text>
              <View className="bg-primary/10 rounded-full px-3 py-1">
                <Text className="text-xs font-semibold text-primary">Active</Text>
              </View>
            </View>
            <Text className="text-sm text-muted">{batch.location}</Text>
          </View>

          {/* Key Metrics */}
          <View className="grid gap-3">
            <View className="flex-row gap-3">
              {/* Entered Date */}
              <View className="flex-1 bg-surface rounded-lg p-4 border border-border">
                <Text className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                  Entered Date
                </Text>
                <Text className="text-base font-bold text-foreground">{batch.enteredDate}</Text>
                <Text className="text-xs text-muted mt-1">5.0 years active</Text>
              </View>

              {/* Initial Capital */}
              <View className="flex-1 bg-surface rounded-lg p-4 border border-border">
                <Text className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                  Initial Capital
                </Text>
                <Text className="text-base font-bold text-foreground">
                  Rp {batch.initialCapital.toLocaleString("id-ID")}
                </Text>
              </View>
            </View>

            <View className="flex-row gap-3">
              {/* Kids Sold */}
              <View className="flex-1 bg-surface rounded-lg p-4 border border-border">
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-xs font-semibold text-muted uppercase tracking-wider">
                    Kids Sold
                  </Text>
                  <MaterialIcons name="shopping-bag" size={18} color={colors.primary} />
                </View>
                <Text className="text-2xl font-bold text-foreground">{batch.kidsSold}</Text>
                <Text className="text-xs text-muted mt-1">Head</Text>
              </View>

              {/* Total Profit */}
              <View className="flex-1 bg-surface rounded-lg p-4 border border-border">
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-xs font-semibold text-muted uppercase tracking-wider">
                    Total Profit
                  </Text>
                  <MaterialIcons name="trending-up" size={18} color={colors.success} />
                </View>
                <Text className="text-base font-bold text-foreground">
                  Rp {batch.totalProfit.toLocaleString("id-ID")}
                </Text>
              </View>
            </View>
          </View>

          {/* Sales History */}
          <View className="gap-3">
            <Text className="text-lg font-bold text-foreground">Riwayat Penjualan Anak</Text>

            {batch.salesHistory.map((sale) => (
              <View key={sale.id} className="bg-surface rounded-lg p-4 border border-border">
                <View className="flex-row items-center justify-between mb-3">
                  <Text className="text-sm font-semibold text-foreground">{sale.date}</Text>
                  <Text className="text-xs font-semibold text-primary">TERJUAL</Text>
                </View>

                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-sm text-muted">{sale.quantity} head</Text>
                  <Text className="text-sm font-bold text-foreground">
                    Rp {sale.price.toLocaleString("id-ID")}
                  </Text>
                </View>

                {/* Investor Share */}
                <View className="bg-background rounded-lg p-3 mt-3">
                  <View className="flex-row items-center gap-2 mb-1">
                    <MaterialIcons name="account-balance" size={14} color={colors.muted} />
                    <Text className="text-xs text-muted">Investor Share (17.5%)</Text>
                  </View>
                  <Text className="text-sm font-bold text-foreground">
                    Rp {(sale.totalAmount * 0.175).toLocaleString("id-ID")}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Investor Share Breakdown */}
          <View className="gap-3 pb-20">
            <Text className="text-lg font-bold text-foreground">Investor Share Breakdown</Text>

            {batch.investorShare.map((share) => (
              <View key={share.id} className="bg-surface rounded-lg p-4 border border-border">
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-sm font-semibold text-foreground">{share.investorName}</Text>
                  <Text className="text-xs font-semibold text-muted">{share.date}</Text>
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-xs text-muted">Share: {share.share}%</Text>
                  <Text className="text-sm font-bold text-primary">
                    Rp {share.amount.toLocaleString("id-ID")}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
