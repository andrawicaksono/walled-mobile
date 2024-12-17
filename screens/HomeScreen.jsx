import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import HomeHeader from "../components/HomeHeader";
import Greeting from "../components/Greeting";
import DetailRow from "../components/DetailRow";
import BalanceDetail from "../components/BalanceDetail";
import TransactionHistory from "../components/TransactionHistory";
import photo from "../assets/photo.jpeg";
import { fetchUser } from "../api/ApiManager";

const HomeScreen = () => {
  const [fullName, setFullName] = useState("");
  const [accountType, setAccountType] = useState("Personal Account");
  const [avatar, setAvatar] = useState("");
  const [firstName, setFirstName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await fetchUser();
      const data = response.data;

      setFullName(data.full_name);
      setFirstName(data.full_name.split(" ")[0]);
      setAccountNo(data.account_no);
      setBalance(data.balance);
      setAvatar(data.avatar_url);
    })();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <HomeHeader
          fullName={fullName}
          accountType={accountType}
          photo={avatar ? avatar : photo}
        ></HomeHeader>
        <StatusBar style="auto" />
        <ScrollView>
          <Greeting firstName={firstName} />
          <DetailRow label="Account No." value={accountNo} />
          <BalanceDetail balance={balance} />
          <TransactionHistory />
        </ScrollView>
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
