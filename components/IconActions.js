import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Plus, Send } from "lucide-react-native";

const IconActions = () => {
  return (
    <View style={styles.iconSection}>
      <TouchableOpacity style={styles.iconContainer}>
        <Plus color="#fff" size={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
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
    elevation: 5,
  },
});

export default IconActions;
