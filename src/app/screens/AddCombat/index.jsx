
import React, { useState } from "react";
import { View, Button, Text } from "tamagui";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Check } from "@tamagui/lucide-icons";
import { YStack } from "tamagui";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 } from "uuid";

const AddCombat = () => {
  const [combatName, setCombatName] = useState("");

  const handleBackToHome = () => {
    navigation.navigate('Home');
  };

  const handleAddCombat = async () => {
    try {
      if (combatName.trim() === "") return;
      let combats = (await AsyncStorage?.getItem?.("@bijas:combats")) || [];
      if (!Array.isArray(combats)) {
        combats = JSON.parse(combats);
      }
      combats.push({combatName, combatId: v4(), combatTurns: []});
  
      await AsyncStorage.setItem("@bijas:combats", JSON.stringify(combats));
      handleBackToHome();
    }
    catch (e) {
      console.log("deu erro", e);
    }
  };

    
  return (
    <>
      <Header title="Creating new Combat" onBack={handleBackToHome} />
      <View>
        <YStack space="$3" flex={1} justifyContent="center" alignItems="center">
          <Input label="Adicione seu combate" state={combatName} setState={setCombatName} />
          <Button
            backgroundColor="green"
            icon={<Check size="$3" />}
            onPress={handleAddCombat}
          ></Button>
        </YStack>
      </View>
    </>
  );
};

export { AddCombat };
