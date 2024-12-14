import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Sun } from "lucide-react-native";

const HomeHeader = ({ fullName, accountType, photo }) => {
  return (
    <View style={styles.container}>
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
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    shadowOffset: { width: 0, height: 0.1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
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

export default HomeHeader;
