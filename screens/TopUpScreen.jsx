import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SubmitButton from "../components/SubmitButton";
import { inputFormatCurrency } from "../utils/currency";
import { postCreateTransaction } from "../api/ApiManager";
import { useNavigation } from "@react-navigation/native";

const TopUpScreen = () => {
  const navigation = useNavigation();

  const payments = [
    { label: "BYOND Pay", value: "BYOND Pay" },
    { label: "Bank Transfer", value: "Bank Transfer" },
  ];

  const [selectedValue, setSelectedValue] = useState(payments[0].value);
  const [amountInput, setAmountInput] = useState("");
  const [rawAmountInput, setRawAmountInput] = useState(0);
  const [notesInput, setNotesInput] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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

  useEffect(() => {
    setIsButtonDisabled(!amountInput);
  }, [amountInput]);

  const handleTopUp = async () => {
    setIsButtonDisabled(true);
    const data = {
      type: "c",
      from_to: selectedValue,
      amount: rawAmountInput,
    };

    if (notesInput) data.description = notesInput;

    const response = await postCreateTransaction(data);
    alert(
      `Top Up IDR ${response.data.amount} from ${response.data.from_to} with note: ${response.data.description}`
    );

    setAmountInput("");
    setNotesInput("");
    setRawAmountInput(0);
    setSelectedValue(payments[0].value);

    navigation.navigate("Home");
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
            <Dropdown
              data={payments}
              value={selectedValue}
              labelField="label"
              valueField="value"
              placeholder="Select Payment Method"
              onChange={(item) => setSelectedValue(item.value)}
              style={styles.dropdown}
              selectedTextStyle={styles.selectedText}
              placeholderStyle={styles.placeholderText}
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
          <SubmitButton onPress={handleTopUp} disabled={isButtonDisabled}>
            Top Up
          </SubmitButton>
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
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },

  dropdown: {
    height: 50,
  },

  selectedText: {
    fontSize: 16,
    color: "#000",
  },

  placeholderText: {
    fontSize: 16,
    color: "#B3B3B3",
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
