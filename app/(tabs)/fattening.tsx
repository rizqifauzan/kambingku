import { Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";

export default function FatteningScreen() {
  return (
    <ScreenContainer className="items-center justify-center">
      <View className="gap-2">
        <Text className="text-2xl font-bold text-foreground">Batch Penggemukan</Text>
        <Text className="text-muted">Segera hadir</Text>
      </View>
    </ScreenContainer>
  );
}
