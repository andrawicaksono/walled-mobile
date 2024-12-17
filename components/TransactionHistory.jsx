import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { formatDate } from "../utils/date";
import { formatCurrency } from "../utils/currency";
import { fetchUserTransactions } from "../api/ApiManager";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(async () => {
    const response = await fetchUserTransactions();

    setTransactions(response.data);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <ScrollView style={styles.list}>
        {transactions.map((transaction, index) => (
          <View key={index} style={styles.transactionRow}>
            <View style={styles.transactionInfo}>
              <View style={styles.avatar} />
              <View>
                <Text style={styles.fromTo}>{transaction.from_to}</Text>
                <Text style={styles.type}>
                  {transaction.type === "c" ? "Topup" : "Transfer"}
                </Text>
                <Text style={styles.date}>
                  {formatDate(transaction.created_at)}
                </Text>
              </View>
            </View>
            <Text
              style={[
                styles.amount,
                { color: transaction.type === "c" ? "#008000" : "#000" },
              ]}
            >
              {`${transaction.type === "c" ? "+" : "-"} ${formatCurrency(
                transaction.amount
              )}`}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
  },
  list: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  transactionInfo: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    backgroundColor: "#D9D9D9",
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  fromTo: {
    fontSize: 14,
    fontWeight: "normal",
  },
  type: {
    fontSize: 12,
    fontWeight: "normal",
  },
  date: {
    fontSize: 10,
    fontWeight: "normal",
    color: "#a9a9a9",
  },
  amount: {
    flex: 1,
    fontSize: 14,
    textAlign: "right",
  },
});

export default TransactionHistory;
