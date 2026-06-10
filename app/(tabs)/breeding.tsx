import { useState } from "react";
import { ScrollView, Text, View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter, Link } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { translations } from "@/constants/translations";
import { breedingBatchesData, recentSalesHistory } from "@/constants/breedingData";

export default function BreedingScreen() {
  const colors = useColors();
  const router = useRouter();
  const activeBatches = breedingBatchesData.filter((b) => b.status === "active");
  const totalActiveMothers = activeBatches.reduce((sum, b) => sum + b.activeMothers, 0);
  const totalKidsSold = breedingBatchesData.reduce((sum, b) => sum + b.kidsSold, 0);

  const handleBatchPress = (batchId: string) => {
    router.push({
      pathname: "/breeding-detail",
      params: { batchId },
    });
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
            <Text className="text-3xl font-bold text-foreground">Bisnis Peranaan</Text>
            <Text className="text-sm text-muted">Breeding Operations Overview</Text>
          </View>

          {/* Stats Cards */}
          <View className="flex-row gap-3">
            {/* Active Mothers Card */}
            <View className="flex-1 bg-surface rounded-lg p-4 border border-border">
              <View className="flex-row items-center gap-2 mb-2">
                <MaterialIcons name="pets" size={18} color={colors.primary} />
                <Text className="text-xs font-semibold text-muted uppercase tracking-wider">
                  Active Mothers
                </Text>
              </View>
              <Text className="text-3xl font-bold text-foreground mb-1">{totalActiveMothers}</Text>
              <Text className="text-xs text-muted">+15 this month</Text>
            </View>

            {/* Kids Sales Card */}
            <View className="flex-1 bg-surface rounded-lg p-4 border border-border">
              <View className="flex-row items-center gap-2 mb-2">
                <MaterialIcons name="trending-up" size={18} color={colors.primary} />
                <Text className="text-xs font-semibold text-muted uppercase tracking-wider">
                  Kids Sales (Qty)
                </Text>
              </View>
              <Text className="text-3xl font-bold text-foreground mb-1">{totalKidsSold}</Text>
              <Text className="text-xs text-muted">24 kids sold</Text>
            </View>
          </View>

          {/* Active Mothers List */}
          <View className="gap-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-lg font-bold text-foreground">Active Mothers List</Text>
              <Pressable>
                <Text className="text-xs font-semibold text-primary">VIEW ALL</Text>
              </Pressable>
            </View>

            {activeBatches.map((batch) => (
              <Link
                key={batch.id}
                href={{
                  pathname: "/breeding-detail",
                  params: { batchId: batch.id },
                }}
                asChild
              >
                <Pressable className="bg-surface rounded-lg p-4 border border-border active:opacity-70">
                {/* Batch Header */}
                <View className="flex-row items-start justify-between mb-3">
                  <View className="flex-row items-center gap-3 flex-1">
                    <View className="w-10 h-10 rounded-lg bg-primary/10 items-center justify-center">
                      <MaterialIcons name="pets" size={20} color={colors.primary} />
                    </View>
                    <View className="flex-1">
                      <Text className="text-base font-bold text-foreground">{batch.code}</Text>
                      <Text className="text-xs text-muted">{batch.location}</Text>
                    </View>
                  </View>
                  <View className="bg-primary/10 rounded-full px-3 py-1">
                    <Text className="text-xs font-semibold text-primary">
                      Kids: {batch.activeMothers}
                    </Text>
                  </View>
                </View>

                {/* Batch Details */}
                <View className="gap-2 mb-3 border-t border-border pt-3">
                  <View className="flex-row justify-between">
                    <Text className="text-xs text-muted">Entered: {batch.enteredDate}</Text>
                    <Text className="text-xs text-muted">{batch.activeMothers} mds active</Text>
                  </View>
                </View>

                {/* Action Buttons */}
                <View className="flex-row gap-2">
                  <Pressable className="flex-1 bg-primary rounded-lg py-2 items-center active:opacity-80">
                    <Text className="text-xs font-semibold text-white">Catat Penjualan Anak</Text>
                  </Pressable>
                  <Pressable className="flex-1 bg-surface border border-border rounded-lg py-2 items-center active:opacity-80">
                    <Text className="text-xs font-semibold text-foreground">Tahap Perawatan</Text>
                  </Pressable>
                </View>
                </Pressable>
              </Link>
            ))}
          </View>

          {/* Recent Sales History */}
          <View className="gap-3 pb-20">
            <Text className="text-lg font-bold text-foreground">Recent Sales History</Text>

            {recentSalesHistory.map((sale) => (
              <View key={sale.id} className="flex-row items-center gap-3 bg-surface rounded-lg p-4 border border-border">
                <View className="w-10 h-10 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
                  <MaterialIcons name="shopping-bag" size={20} color={colors.primary} />
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-semibold text-foreground">{sale.batchCode} Kid</Text>
                  <Text className="text-xs text-muted">{sale.date} • {sale.quantity} kids sold</Text>
                </View>
                <Text className="text-sm font-bold text-primary">+ Rp {sale.amount.toLocaleString("id-ID")}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
