
import React, { useState } from "react";
import { View, Button, Text } from "tamagui";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { YStack } from "tamagui";

const AddCombat = () => {
  const [monsterName, setMonsterName] = useState("");
  const [monsterList, setMonsterList] = useState([]);

  const handleBackToHome = () => {
    console.log("navigate back to home");
  };

  const handleAddToList = () => {
    if (monsterName.trim() !== "") {
      setMonsterList((prevList) => [...prevList, monsterName]);
      setMonsterName("");
    }
  };

    
  return (
    <>
      <Header title="Creating new Combat" onAddToList={handleAddToList} onBack={handleBackToHome} />
      <View>
        <YStack space="$3">
          <Input label="Adicione seu combate" state={monsterName} setState={setMonsterName} />
          <YStack space="$2">
            {monsterList.map((monster, index) => (
              <View key={index} style={{ borderColor: "black", borderWidth: 1, padding: 10, borderRadius: 8, width: 40, height: 40 }}>
                <Text>{monster}</Text>
              </View>
            ))}
          </YStack>
        </YStack>
      </View>
    </>
  );
};

export { AddCombat };
