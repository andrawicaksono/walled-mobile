import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const AuthButton = ({ children, onPress }) => {
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
    bottom: 20,
    left: 0,
    right: 0,
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

export default AuthButton;
