import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import { formatCurrency } from "../utils/currency";

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
          {showBalance ? `Rp${formatCurrency(balance)}` : "***************"}
        </Text>
        <TouchableOpacity style={styles.eyeIcon} onPress={handlePress}>
          {showBalance ? (
            <Eye color="#a9a9a9" size={24} />
          ) : (
            <EyeOff color="#a9a9a9" size={24} />
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
    left: 195,
  },
});

export default BalanceInfo;
