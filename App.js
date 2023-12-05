import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddTurn } from "./src/app/screens/AddTurn";
import { CombatDetails } from "./src/app/screens/CombatDetails";
import { AddCombat } from "./src/app/screens/AddCombat";
import { Home } from "./src/app/screens/Home";
import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { useFonts } from "expo-font";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AddTurn" component={AddTurn} 
            options={{
              headerShadowVisible: false,
              headerTitle: ""
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  );
};

export default App;
