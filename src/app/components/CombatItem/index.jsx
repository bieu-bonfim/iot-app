import { Button, Text } from "tamagui";

const CombatItem = ({ text, onClick }) => {
  return (
    <Button backgroundColor="$blue6" width="90%" onPress={onClick}>
      <Text>{text}</Text>
    </Button>
  );
};

export default CombatItem;
