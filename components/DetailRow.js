import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailRow = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#19918F",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    textAlign: "left",
  },
  value: {
    flexShrink: 1,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default DetailRow;
