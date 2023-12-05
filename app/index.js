// this provides some helpful reset styles to ensure a more consistent look

import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import { Text, View } from "react-native";
export default function App() {
  return (
    <TamaguiProvider config={config}>
      <View>
        <Text>Hello Bijas!</Text>
      </View>
    </TamaguiProvider>
  );
}
