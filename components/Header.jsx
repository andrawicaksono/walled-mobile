import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = ({ title }) => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Header;
