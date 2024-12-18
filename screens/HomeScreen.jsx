import React, { useEffect, useState, useCallback } from "react";
import { ScrollView, StyleSheet, RefreshControl } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import HomeHeader from "../components/HomeHeader";
import Greeting from "../components/Greeting";
import DetailRow from "../components/DetailRow";
import BalanceDetail from "../components/BalanceDetail";
import TransactionHistory from "../components/TransactionHistory";
import photo from "../assets/photo.jpeg";
import { fetchUser, fetchUserTransactions } from "../api/ApiManager";

const HomeScreen = () => {
  const [fullName, setFullName] = useState("");
  const [accountType, setAccountType] = useState("Personal Account");
  const [avatar, setAvatar] = useState("");
  const [firstName, setFirstName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchUserData = useCallback(async () => {
    const response = await fetchUser();
    const data = response.data;

    setFullName(data.full_name);
    setFirstName(data.full_name.split(" ")[0]);
    setAccountNo(data.account_no);
    setBalance(data.balance);
    setAvatar(data.avatar_url);
  }, []);

  const fetchTransactionsData = useCallback(async () => {
    const response = await fetchUserTransactions();
    setTransactions(response.data);
  });

  useEffect(() => {
    fetchUserData();
    fetchTransactionsData();
  }, []);

  useEffect(() => {
    if (refreshing) {
      fetchUserData();
      fetchTransactionsData();
    }
  }, [refreshing]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchUserData();
    setRefreshing(false);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <HomeHeader
          fullName={fullName}
          accountType={accountType}
          photo={avatar ? { uri: avatar } : photo}
        />
        <StatusBar style="auto" />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Greeting firstName={firstName} />
          <DetailRow label="Account No." value={accountNo} />
          <BalanceDetail balance={balance} />
          <TransactionHistory transactions={transactions} />
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
