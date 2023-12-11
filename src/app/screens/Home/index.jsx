import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, YStack, ScrollView, Button } from "tamagui";
import { Header } from "../../components/Header";
import CombatItem from "../../components/CombatItem";
import React, { useState, useEffect } from "react";

const getAllCombats = async () => {
  const jsonValue = await AsyncStorage.getItem("@bijas:combats");
  return jsonValue != null ? JSON.parse(jsonValue) : [];
};

const Home = ({navigation, route}) => {
  const [combatsList, setCombatsList] = useState([]);

  const handleAddCombat = () => {
    console.log('Navegar para a screen de adicionar combate');
    navigation.navigate('AddCombat');
  };

  const loadCombats = async () => {
    const combats = await getAllCombats();
    setCombatsList(combats);
  };

 /* TODO: Add remove button to each CombatItem Component */

  const clearAll = async () => {
    await AsyncStorage.clear();
  };

  /* ---------------------------------- */

  useEffect(() => {
    loadCombats();
  }, [route, combatsList]);

  return (
    <>
      <Header title="Combats" onAddToList={handleAddCombat} />
      <View>
        <ScrollView marginTop={60} marginBottom={60} padding={20} height={"85%"}>
          <YStack space="$4" alignItems="center">
            {combatsList.map((combat) => {
              return (
                <CombatItem
                  key={combat.combatId}
                  text={combat.combatName}
                  onClick={() => navigation.navigate("CombatDetails", combat )} />
              );
            })}
            <Button
              backgroundColor={"$red8"}
              onPress={() => {
                clearAll();
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
