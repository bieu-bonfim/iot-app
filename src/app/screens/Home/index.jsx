import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Button, Text } from "tamagui";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Home = () => {
    return (
      <View style={styles.container}>
        <Text>Casa!</Text>
        <StatusBar style="auto" />
        <Button backgroundColor="blue">Hello world</Button>
        <Text>Teste</Text>
      </View>
    );
  };
  
  export { Home };