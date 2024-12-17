import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  RefreshControl,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SubmitButton from "../components/SubmitButton";
import { formatCurrency, inputFormatCurrency } from "../utils/currency";
import { fetchUser, postCreateTransaction } from "../api/ApiManager";
import { useNavigation } from "@react-navigation/native";

const TransferScreen = () => {
  const navigation = useNavigation();

  const accounts = [
    { label: "832039 (Andra Wicaksono)", value: "832039" },
    { label: "823748 (Wicaksono Andra)", value: "823748" },
  ];

  const [balance, setBalance] = useState(0);
  const [selectedValue, setSelectedValue] = useState(accounts[0].value);
  const [open, setOpen] = useState(false);
  const [amountInput, setAmountInput] = useState("");
  const [rawAmountInput, setRawAmountInput] = useState(0);
  const [notesInput, setNotesInput] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const fetchUserData = useCallback(async () => {
    const response = await fetchUser();
    setBalance(response.data.balance);
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchUserData();
    setRefreshing(false);
  };

  const handleAmountInputChange = (text) => {
    const rawValue = text.replace(/[^\d]/g, "");
    const numericValue = parseInt(rawValue, 10) || 0;

    if (numericValue <= balance) {
      setAmountInput(inputFormatCurrency(numericValue));
      setRawAmountInput(numericValue);
    }

    if (numericValue <= 0) {
      setAmountInput("");
      setRawAmountInput(0);
    }
  };

  const handleTransfer = async () => {
    const data = {
      type: "d",
      from_to: selectedValue,
      amount: rawAmountInput,
    };

    if (notesInput) data.description = notesInput;

    const response = await postCreateTransaction(data);
    alert(
      `Transfering IDR ${response.data.amount} to ${response.data.from_to} with note: ${response.data.description}`
    );

    setSelectedValue(accounts[0].value);
    setAmountInput("");
    setNotesInput("");
    setRawAmountInput(0);

    navigation.navigate("Home");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.dropdownContainer}>
            <Text style={styles.label}>To:</Text>
            <DropDownPicker
              open={open}
              value={selectedValue}
              items={accounts}
              setOpen={setOpen}
              setValue={setSelectedValue}
              style={styles.dropdown}
              labelStyle={styles.label}
              showArrowIcon={false}
            />
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Amount</Text>
              <View style={styles.inputWrapper}>
                <Text style={styles.currencyLabel}>IDR</Text>
                <TextInput
                  style={styles.amountInput}
                  keyboardType="numeric"
                  value={amountInput}
                  onChangeText={(text) => handleAmountInputChange(text)}
                />
              </View>
              <View style={styles.balanceContainer}>
                <Text style={styles.balanceLabel}>Balance</Text>
                <Text style={styles.balanceValue}>
                  IDR{formatCurrency(balance)}
                </Text>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Notes</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.notesInput}
                  value={notesInput}
                  onChangeText={(text) => setNotesInput(text)}
                />
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <SubmitButton onPress={handleTransfer}>Transfer</SubmitButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFBFD",
  },

  scrollView: {
    paddingBottom: 20,
  },

  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#19918F",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: "#fff",
  },

  dropdown: {
    backgroundColor: "transparent",
    borderWidth: 0,
    color: "#fff",
  },

  formContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingBottom: 20,
    marginTop: 24,
  },

  inputContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },

  inputLabel: {
    color: "#B3B3B3",
    marginBottom: 8,
  },

  inputWrapper: {
    flexDirection: "row",
    borderBottomWidth: 1,
    height: 60,
    borderBottomColor: "#E1E1E1",
  },

  currencyLabel: {
    fontSize: 16,
  },

  amountInput: {
    flex: 1,
    fontSize: 36,
    marginLeft: 8,
  },

  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  balanceLabel: {
    fontSize: 12,
    color: "#B3B3B3",
  },

  balanceValue: {
    color: "#19918F",
    fontSize: 12,
  },

  notesInput: {
    flex: 1,
    fontSize: 24,
    marginLeft: 8,
  },

  buttonContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default TransferScreen;
