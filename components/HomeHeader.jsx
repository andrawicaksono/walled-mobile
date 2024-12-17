import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { LogOut, Sun } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";

const HomeHeader = ({ fullName, accountType, photo }) => {
  const navigation = useNavigation();
  const auth = useAuth();

  const handleLogout = async () => {
    await auth.logout();
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={photo} style={styles.profilePhoto} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{fullName}</Text>
          <Text style={styles.accountType}>{accountType}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Sun color="#F8AB39" size={32} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <LogOut color="#000" size={32} />
        </TouchableOpacity>
      </View>
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

  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

export default HomeHeader;
