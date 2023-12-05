import { View, YStack, ScrollView } from "tamagui";
import Combate from "../../components/Combat";

const Home = () => {
  return (
    <View>
      <ScrollView marginTop={60} marginBottom={60} padding={20} height={"85%"}>
        <YStack space="$4" alignItems="center">
          <Combate text={"Combate 1"} onClick={() => alert("test")}/>
          <Combate text={"Combate 1"} />
          <Combate text={"Combate 1"} />
          <Combate text={"Combate 1"} />
          <Combate text={"Combate 1"} />
        </YStack>
      </ScrollView>
    </View>
  );
};

export { Home };
