import { Button, Text, YStack } from "tamagui";

const TurnItem = ({ onClick, monsterName, monsterMaxLife, monsterCurrentLife, monsterModifier }) => {
  return (

      <YStack
        padding="$3"
        backgroundColor="$blue6" 
        width="90%" 
        onPress={onClick} 
        display="flex"
      >
        <Text>Name: {monsterName}</Text>
        <Text>Max HP: {monsterMaxLife}</Text>
        <Text>Current HP: {monsterCurrentLife}</Text>
        <Text>Modifier: {monsterModifier}</Text>
      </YStack>
  );
};

export default TurnItem;
