import { Button, Text, XStack } from "tamagui";
import { StepBack, Plus } from "@tamagui/lucide-icons";

const Header = ({ title = "", onAddToList = null, onBack = null }) => {
  return (
    <XStack
      flexWrap="wrap"
      backgroundColor="#fff"
      alignItems="center"
      justifyContent={onAddToList ? "space-between" : "center"}
    >
      {onBack && (
        <Button icon={<StepBack size="$1.5" />} onPress={onBack}></Button>
      )}
      <Text>{title}</Text>
      {onAddToList && (
        <Button icon={<Plus size="$1.5" />} onPress={onAddToList}></Button>
      )}
    </XStack>
  );
};

export { Header };
