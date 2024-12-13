import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Sun } from "lucide-react-native";
import { useTheme } from "../contexts/ThemeContext";

const AppBar = ({ fullName, accountType, photo }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <View style={styles.header}>
      <View style={styles.profileContainer}>
        <Image source={photo} style={styles.profilePhoto} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{fullName}</Text>
          <Text style={styles.accountType}>{accountType}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Sun color="#F8AB39" size={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePhoto: {
    height: 48,
    width: 48,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: "#19918F",
  },
  profileInfo: {
    marginLeft: 8,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  accountType: {
    fontSize: 14,
  },
});

export default AppBar;
