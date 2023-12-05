import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, YStack, ScrollView, Button } from "tamagui";
import Combate from "../../components/Combat";
import React, { useState, useEffect } from "react";

const getAllCombats = async () => {
  const jsonValue = await AsyncStorage.getItem("combats");
  return jsonValue != null ? JSON.parse(jsonValue) : [];
};

const saveNewCombat = async (newCombat) => {
  const existingCombats = await getAllCombats();
  const updatedCombats = [...existingCombats, newCombat];
  const jsonValue = JSON.stringify(updatedCombats);
  await AsyncStorage.setItem("combats", jsonValue);
};

const Home = () => {
  const [combatsList, setCombatsList] = useState([]);

  const loadCombats = async () => {
    const combats = await getAllCombats();
    setCombatsList(combats);
  };

  const newCombat = {
    name: "Battle in the Forest",
    turns: [{ monsterName: "Goblin", monsterLife: 30, monsterModifier: 2 }],
  };

  const handleSaveNewCombat = async () => {
    await saveNewCombat(newCombat);
    loadCombats();
  };

  const clearAll = async () => {
    await AsyncStorage.clear();
  };

  useEffect(() => {
    loadCombats();
  }, []);

  return (
    <View>
      <ScrollView marginTop={60} marginBottom={60} padding={20} height={"85%"}>
        <YStack space="$4" alignItems="center">
          {combatsList.map((combat) => {
            return (
              <Combate
                text={combat.name}
                onClick={() => handleSaveNewCombat()}
              />
            );
          })}
          <Button
            backgroundColor={"$red8"}
            onPress={() => {
              clearAll();
              handleSaveNewCombat();
            }}
          >
            Excluir
          </Button>
        </YStack>
      </ScrollView>
    </View>
  );
};

export { Home };
