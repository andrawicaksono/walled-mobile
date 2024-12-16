import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import HomeHeader from "../components/HomeHeader";
import Greeting from "../components/Greeting";
import DetailRow from "../components/DetailRow";
import BalanceDetail from "../components/BalanceDetail";
import TransactionHistory from "../components/TransactionHistory";
import AppBar from "../components/AppBar";
import photo from "../assets/photo.jpeg";

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <HomeHeader
          fullName="Chelsea Immanuela"
          accountType="Personal Account"
          photo={photo}
        ></HomeHeader>
        <StatusBar style="auto" />
        <ScrollView>
          <Greeting firstName="Chelsea" />
          <DetailRow label="Account No." value="100899" />
          <BalanceDetail balance={10000000} />
          <TransactionHistory />
        </ScrollView>
        <AppBar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafbfd",
  },
});

export default HomeScreen;
