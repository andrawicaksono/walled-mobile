import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SubmitButton from "../components/SubmitButton";
import { inputFormatCurrency } from "../utils/currency";

const TopUpScreen = () => {
  const payments = [
    { label: "BYOND Pay", value: "BYOND Pay" },
    { label: "Bank Transfer", value: "Bank Transfer" },
  ];

  const [selectedValue, setSelectedValue] = useState(payments[0].value);
  const [open, setOpen] = useState(false);
  const [amountInput, setAmountInput] = useState("");
  const [rawAmountInput, setRawAmountInput] = useState(0);
  const [notesInput, setNotesInput] = useState("");

  const handleAmountInputChange = (text) => {
    const rawValue = text.replace(/[^\d]/g, "");
    const numericValue = parseInt(rawValue, 10) || 0;

    setAmountInput(inputFormatCurrency(numericValue));
    setRawAmountInput(numericValue);

    if (numericValue <= 0) {
      setAmountInput("");
      setRawAmountInput(0);
    }
  };

  const handleTopUp = () => {
    alert(
      `Top Up IDR ${amountInput} from ${selectedValue} with note: ${notesInput}`
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
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
          </View>

          <View style={styles.dropdownContainer}>
            <DropDownPicker
              open={open}
              value={selectedValue}
              items={payments}
              setOpen={setOpen}
              setValue={setSelectedValue}
              style={styles.dropdown}
              labelStyle={styles.label}
            />
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
          <SubmitButton onPress={handleTopUp}>Top Up</SubmitButton>
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
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: "#000",
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
    gap: 24,
  },

  inputContainer: {
    paddingHorizontal: 20,
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

export default TopUpScreen;
