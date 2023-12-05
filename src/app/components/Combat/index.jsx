import { Button, Text } from "tamagui";

const Combate = ({ text, onClick }) => {
  return (
    <Button backgroundColor="$blue6" width="90%" onPress={onClick}>
      <Text>{text}</Text>
    </Button>
  );
};

export default Combate;
