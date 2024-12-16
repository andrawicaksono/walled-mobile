import { TextInput, StyleSheet } from "react-native";

const Input = ({
  placeholder,
  onChangeText,
  value,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#000"
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
      autoCorrect={false}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    paddingHorizontal: 28,
    paddingVertical: 16,
    backgroundColor: "#FAFBFD",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
});

export default Input;
