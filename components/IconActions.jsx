import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Plus, Send } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const IconActions = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.iconSection}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate("Topup")}
      >
        <Plus color="#fff" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.navigate("Transfer")}
      >
        <Send color="#fff" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconSection: {
    justifyContent: "space-between",
    gap: 16,
  },
  iconContainer: {
    backgroundColor: "#19918F",
    padding: 12,
    borderRadius: 10,
    shadowColor: "#19918F",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 10,
  },
});

export default IconActions;
