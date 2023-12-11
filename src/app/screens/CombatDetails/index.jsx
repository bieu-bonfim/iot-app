import React, { useState } from 'react';
import { View, Button, Text, XStack, YStack } from 'tamagui';
import { Header } from '../../components/Header';
import { Plus } from '@tamagui/lucide-icons';
import { StatusBar } from 'expo-status-bar';

const CombatDetails = ({ combatDetails, navigation }) => {

  const handleBackToHome = () => {
    console.log("navigate back to home");
    navigation.navigate('Home');
  };

  const handleDiceRoll = () => {
    console.log('Rolando dado');
  };

  const handleAddTurn = () => {
    console.log('Navegar para a screen de adicionar turnos');
    navigation.navigate('AddTurn');
  };

  const placeholderDetails = {
    monsterName: 'Criatura',
    monsterMaxLife: 'N/A',
    monsterCurrentLife: 'N/A',
    monsterModifier: 'N/A',
  };

  const details = combatDetails || placeholderDetails;

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
        >
          <Text variant="h2">ID do Combate</Text>
          <Text>Name: {details.monsterName}</Text>
          <Text>Max HP: {details.monsterMaxLife}</Text>
          <Text>Current HP: {details.monsterCurrentLife}</Text>
          <Text>Modifier: {details.monsterModifier}</Text>
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
