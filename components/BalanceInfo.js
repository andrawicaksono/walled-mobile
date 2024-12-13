import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";

const BalanceInfo = ({ balance }) => {
  const [showBalance, setShowBalance] = useState(false);

  const handlePress = () => {
    setShowBalance((currentShowBalance) => !currentShowBalance);
  };

  return (
    <View>
      <Text style={styles.title}>Balance</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>
          {showBalance ? balance : "**********"}
        </Text>
        <TouchableOpacity style={styles.eyeIcon} onPress={handlePress}>
          {showBalance ? (
            <Eye color="gray" size={24} />
          ) : (
            <EyeOff color="gray" size={24} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 14 },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  balanceText: {
    fontSize: 24,
    fontWeight: "600",
  },
  eyeIcon: {
    position: "absolute",
    left: 175,
  },
});

export default BalanceInfo;
