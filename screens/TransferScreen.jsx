import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SubmitButton from "../components/SubmitButton";
import { formatCurrency, inputFormatCurrency } from "../utils/currency";

const TransferScreen = () => {
  const accounts = [
    { label: "83203927423 (Andra Wicaksono)", value: "83203927423" },
    { label: "82374824343 (Wicaksono Andra)", value: "82374824343" },
  ];

  const [balance, setBalance] = useState(10000000);

  const [selectedValue, setSelectedValue] = useState(accounts[0].value);
  const [open, setOpen] = useState(false);
  const [amountInput, setAmountInput] = useState("");
  const [rawAmountInput, setRawAmountInput] = useState(0);
  const [notesInput, setNotesInput] = useState("");

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

  const handleTransfer = () => {
    alert(
      `Transfering IDR ${amountInput} to ${selectedValue} with note: ${notesInput}`
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>To:</Text>
          <DropDownPicker
            open={open}
            value={selectedValue}
            items={accounts}
            setOpen={setOpen}
            setValue={setSelectedValue}
            style={styles.dropdown}
            labelStyle={{ color: "#fff", fontSize: 16 }}
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFBFD",
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
