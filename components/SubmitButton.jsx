import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const SubmitButton = ({ children, onPress, disabled = false }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, disabled ? styles.buttonDisabled : null]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#088A85",
    borderRadius: 6,
    alignItems: "center",
    paddingVertical: 12,
    width: "90%",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SubmitButton;
