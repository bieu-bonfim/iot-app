import { View } from "react-native";
import { Header } from "../../components/Header";
import { useState } from "react";
import { Input } from "../../components/Input";
import { YStack, Button } from "tamagui";
import { Check } from "@tamagui/lucide-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 } from "uuid";

const AddTurn = ({ navigation, route }) => {
  const [monsterName, setMonsterName] = useState("");
  const [monsterMaxLife, setMonsterMaxLife] = useState(0);
  const [monsterCurrentLife, setMonsterCurrentLife] = useState(0);
  const [monsterModifier, setMonsterModifier] = useState(0);
  const [combat, setCombat] = useState(route.params);

  const handleBackToCombatDetails = () => {
    navigation.navigate('CombatDetails', combat); 
  };

  const handleAddTurn = async () => {
    try {
      let combats = (await AsyncStorage?.getItem?.("@bijas:combats")) || [];
      if (!Array.isArray(combats)) {
        combats = JSON.parse(combats);
      }
      const combatIndex = combats.findIndex((c) => c.combatId === combat.combatId);
      combats[combatIndex].combatTurns.push({ monsterName, monsterMaxLife, monsterCurrentLife, monsterModifier, turnId: v4()});
      setCombat({ ...combat, combatTurns: combats[combatIndex].combatTurns});
      await AsyncStorage.setItem("@bijas:combats", JSON.stringify(combats));
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
