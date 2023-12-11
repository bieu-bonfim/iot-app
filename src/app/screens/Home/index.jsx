import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, YStack, ScrollView, Button } from "tamagui";
import { Header } from "../../components/Header";
import CombatItem from "../../components/CombatItem";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const Home = ({navigation}) => {
  const [combatsList, setCombatsList] = useState([]);

  const handleAddCombat = () => {
    console.log('Navegar para a screen de adicionar combate');
    navigation.navigate('AddCombat');
  };

  const loadCombats = async () => {
    const combats = await getAllCombats();
    setCombatsList(combats);
  };

  /* TODO: Move this logic to AddCombat Screen */

  const newCombat = {
    name: "Battle in the Forest",
    turns: [{ monsterName: "Goblin", monsterLife: 30, monsterModifier: 2 }],
  };

  const handleSaveNewCombat = async () => {
    await saveNewCombat(newCombat);
    loadCombats();
  };

  /* ---------------------------------- */

 /* TODO: Add remove button to each CombatItem Component */

  const clearAll = async () => {
    await AsyncStorage.clear();
  };

  /* ---------------------------------- */

  useEffect(() => {
    loadCombats();
  }, []);

  return (
    <>
      <Header title="Combats" onAddToList={handleAddCombat} />
      <View>
        <ScrollView marginTop={60} marginBottom={60} padding={20} height={"85%"}>
          <YStack space="$4" alignItems="center">
            {combatsList.map((combat) => {
              return (
                <CombatItem
                  text={combat.name}
                  onClick={() => navigation.navigate("CombatDetails")} />
              );
            })}
            <Button
              backgroundColor={"$red8"}
              onPress={() => {
                clearAll();
                handleSaveNewCombat();
              } }
            >
              Excluir
            </Button>
          </YStack>
        </ScrollView>
      </View>
    </>
  );
};

export { Home };
