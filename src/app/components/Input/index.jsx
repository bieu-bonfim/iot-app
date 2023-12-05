import { Text, View, YStack, Input as InputTamagui } from "tamagui";

const Input = ({ label = "", state, setState }) => {
  return (
    <View>
      <YStack>
        {label && <Text>{label}</Text>}
        <InputTamagui
          size="$4"
          borderWidth={2}
          value={state}
          onChange={(e) => {
            setState(e?.target?.value);
          }}
          label={label}
        />
      </YStack>
    </View>
  );
};

export { Input };
