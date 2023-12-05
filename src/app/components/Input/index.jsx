import { Text, View, YStack, Input as InputTamagui } from "tamagui";

const Input = ({ label = "", type = "text", state, setState }) => {
  return (
    <View>
      <YStack space="$1.5">
        {label && <Text>{label}</Text>}
        <InputTamagui
          type={type}
          size="$4"
          borderWidth={2}
          value={state}
          onChangeText={setState}
          label={label}
        />
      </YStack>
    </View>
  );
};

export { Input };
