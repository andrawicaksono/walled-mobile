import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import sun from "../assets/sun.png";

const Greeting = () => {
  return (
    <View style={styles.greetingContainer}>
      <View style={styles.textSection}>
        <Text style={styles.greetingTitle}>Good Morning, Chelsea</Text>
        <Text style={styles.greetingSubtitle}>
          Check all your incoming and outgoing transactions here
        </Text>
      </View>
      <Image source={sun} style={styles.greetingImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  textSection: {
    flex: 1,
    justifyContent: "space-between",
  },
  greetingTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  greetingSubtitle: {
    fontSize: 16,
    marginTop: 12,
  },
  greetingImage: {
    height: 80,
    resizeMode: "contain",
  },
});

export default Greeting;
