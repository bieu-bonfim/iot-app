import React, { useState } from 'react';
import { View, Button, Text, XStack, YStack } from 'tamagui';
import { Header } from '../../components/Header';
import { Plus, X } from '@tamagui/lucide-icons';
import { StatusBar } from 'expo-status-bar';
import TurnItem from '../../components/TurnItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CombatDetails = ({ navigation, route }) => {
  const [activeTurnId, setActiveTurnId] = useState("0");
  const [diceResult, setDiceResult] = useState()
  const [combat, setCombat] = useState(route.params);


  const handleBackToHome = () => {
    console.log("navigate back to home");
    navigation.navigate('Home');
  };

  const handleDiceRoll = () => {
    setDiceResult(Math.floor(Math.random() * 6) + 1);
  };

  const handleAddTurn = () => {
    console.log('Navegar para a screen de adicionar turnos');
    navigation.navigate('AddTurn', route.params);
  };

  const { combatId, combatName, combatTurns } = route.params;

  const handleEndTurn = async () => {
    setActiveTurnId("0");
    setDiceResult(undefined);
  }

  const handleTurnClick = async (turnId) => {
    try {
      if (diceResult) {
        const turnIndex = combatTurns.findIndex((turn) => turn.turnId === turnId);
        const newCombatTurns = [...combatTurns];
        newCombatTurns[turnIndex].monsterCurrentLife -= diceResult + newCombatTurns[turnIndex].monsterModifier;
  
        let combats = (await AsyncStorage?.getItem?.("@bijas:combats")) || [];
        if (!Array.isArray(combats)) {
          combats = JSON.parse(combats);
        }
        const combatIndex = combats.findIndex((c) => c.combatId === combatId);
        combats[combatIndex].combatTurns = newCombatTurns;
        setCombat({ ...combat, combatTurns: combats[combatIndex].combatTurns});
        await AsyncStorage.setItem("@bijas:combats", JSON.stringify(combats));
      } else {
        setActiveTurnId(turnId);
      }
    } catch (e) {
      console.log("deu erro", e);
    }
  };

  return (
    <>
      <Header title="Detalhes do Combate" onAddToList={handleAddTurn} onBack={handleBackToHome} />
      <YStack flex={1} justifyContent="center" alignItems="center" space="$4">
        <YStack
          backgroundColor="#fff"
          padding="$4"
          borderRadius="$3"
          alignItems="center"
          space="$2"
          wrap="wrap"
          gap="$2"
        >
          <Text variant="h2">{combatName}</Text>
          
          {combatTurns.map((turn) => {
            return (
              <TurnItem
                key={turn.turnId}
                monsterName={turn.monsterName}
                monsterCurrentLife={turn.monsterCurrentLife}
                monsterMaxLife={turn.monsterMaxLife}
                monsterModifier={turn.monsterModifier}
                onClick={() => handleTurnClick(turn.turnId)} 
                turnId={turn.turnId}
                activeTurnId={activeTurnId}  
              />
            );
          })}

          <Button onPress={handleDiceRoll} icon={<Plus size="$4" />}>
            Rolar dado
          </Button>
          <Text>
            {diceResult}
          </Text>
          <Button onPress={handleEndTurn} icon={<X size="$4" />}>
            Encerrar turno
          </Button>
        </YStack>
        <StatusBar style="auto" />
      </YStack>
    </>
  );
};

export { CombatDetails };
