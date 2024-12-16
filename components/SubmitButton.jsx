import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const SubmitButton = ({ children, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
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
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SubmitButton;
