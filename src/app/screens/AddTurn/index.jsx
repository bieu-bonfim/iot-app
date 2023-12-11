import { View } from "react-native";
import { Header } from "../../components/Header";
import { useState } from "react";
import { Input } from "../../components/Input";
import { YStack, Button } from "tamagui";
import { Check } from "@tamagui/lucide-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddTurn = ({navigation}) => {
  const [monsterName, setMonsterName] = useState("");
  const [monsterMaxLife, setMonsterMaxLife] = useState(0);
  const [monsterCurrentLife, setMonsterCurrentLife] = useState(0);
  const [monsterModifier, setMonsterModifier] = useState(0);

  const handleBackToCombatDetails = () => {
    navigation.navigate('CombatDetails'); 
  };

  const handleAddTurn = async () => {
    try {
      let turns = (await AsyncStorage?.getItem?.("@bijas:turns")) || [];
      if (!Array.isArray(turns)) {
        turns = JSON.parse(turns);
      }
      turns.push({ monsterName, monsterMaxLife, monsterCurrentLife, monsterModifier });

      await AsyncStorage.setItem("@bijas:turns", JSON.stringify(turns));
      setMonsterName("");
      setMonsterMaxLife(0);
      setMonsterCurrentLife(0);
      setMonsterModifier(0);
    } catch (e) {
      console.log("deu erro", e);
    }
  };

  return (
    <>
      <Header title="Adding turn" onBack={handleBackToCombatDetails} />
      <View>
        <YStack space="$3" justifyContent="center" margin="auto">
          <Input
            label="Creature name"
            state={monsterName}
            setState={setMonsterName}
          />

          <Input
            type="number"
            label="Max Life"
            state={monsterMaxLife}
            setState={setMonsterMaxLife}
          />

<Input
            type="number"
            label="Current Life"
            state={monsterCurrentLife}
            setState={setMonsterCurrentLife}
          />

          <Input
            type="number"
            label="Damage modifier"
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
