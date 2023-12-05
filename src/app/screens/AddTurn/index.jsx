import { View } from "react-native";
import { Header } from "../../components/Header";
import { useState } from "react";
import { Input } from "../../components/Input";
import { YStack } from "tamagui";

const AddTurn = () => {
  const [monsterName, setMonsterName] = useState("");

  return (
    <>
      <Header title="Home" onAddToList={"a"} />
      <View>
        <YStack space="$3">
          <Input
            label="Gorgonzola"
            state={monsterName}
            setState={setMonsterName}
          />
        </YStack>
      </View>
    </>
  );
};

export { AddTurn };
