import { View } from "react-native";
import { Header } from "../../components/Header";
import { useState } from "react";
import { Input } from "../../components/Input";
import { YStack, Button } from "tamagui";
import { Check } from "@tamagui/lucide-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddTurn = () => {
  const [monsterName, setMonsterName] = useState("");
  const [monsterLife, setMonsterLife] = useState(0);
  const [monsterModifier, setMonsterModifier] = useState(0);

  const handleAddTurn = async () => {
    try {
      let turns = (await AsyncStorage?.getItem?.("@bijas:turns")) || [];
      if (!Array.isArray(turns)) {
        turns = JSON.parse(turns);
      }
      turns.push({ monsterName, monsterLife, monsterModifier });

      await AsyncStorage.setItem("@bijas:turns", JSON.stringify(turns));
      setMonsterName("");
      setMonsterLife(0);
      setMonsterModifier(0);
    } catch (e) {
      console.log("deu erro", e);
    }
  };

  return (
    <>
      <Header title="Home" />
      <View>
        <YStack space="$3" justifyContent="center" margin="auto">
          <Input
            label="Nome da criatura"
            state={monsterName}
            setState={setMonsterName}
          />

          <Input
            type="number"
            label="Vida"
            state={monsterLife}
            setState={setMonsterLife}
          />

          <Input
            type="number"
            label="Modificador"
            state={monsterModifier}
            setState={setMonsterModifier}
          />

          <Button
            backgroundColor="green"
            icon={<Check size="$1.5" />}
            onPress={handleAddTurn}
          ></Button>
        </YStack>
      </View>
    </>
  );
};

export { AddTurn };
