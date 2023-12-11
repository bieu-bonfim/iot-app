import React, { useState } from 'react';
import { View, Button, Text, XStack, YStack } from 'tamagui';
import { Header } from '../../components/Header';
import { Plus } from '@tamagui/lucide-icons';
import { StatusBar } from 'expo-status-bar';
import TurnItem from '../../components/TurnItem';

const CombatDetails = ({ navigation, route }) => {

  const handleBackToHome = () => {
    console.log("navigate back to home");
    navigation.navigate('Home');
  };

  const handleDiceRoll = () => {
    console.log('Rolando dado');
  };

  const handleAddTurn = () => {
    console.log('Navegar para a screen de adicionar turnos');
    navigation.navigate('AddTurn', route.params);
  };

  const { combatId, combatName, combatTurns } = route.params;

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
                key={turn.monsterName}
                monsterName={turn.monsterName}
                monsterCurrentLife={turn.monsterCurrentLife}
                monsterMaxLife={turn.monsterMaxLife}
                monsterModifier={turn.monsterModifier}
                onClick={() => console.log('clicked on '+ turn.monsterName)} />
            );
          })}

          <Button onPress={handleDiceRoll} icon={<Plus size="$4" />}>
            Rolar dado
          </Button>
        </YStack>
        <StatusBar style="auto" />
      </YStack>
    </>
  );
};

export { CombatDetails };
