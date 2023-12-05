
import { Button, Text, View, XStack } from "tamagui";
import { StepBack, Plus } from "@tamagui/lucide-icons";

const Header = ({ title = "", onAddToList = null }) => {
  return (
    <View>
      <XStack
        flex={1}
        flexWrap="wrap"
        backgroundColor="#fff"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button icon={<StepBack size="$1.5" />}></Button>
        <Text>{title}</Text>
        {onAddToList && <Button icon={<Plus size="$1.5" />} onPress={onAddToList}></Button>}
      </XStack>
    </View>
  );
};

export { Header };
