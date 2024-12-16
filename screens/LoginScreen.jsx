import React, { useState } from "react";
import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import walledLogo from "../assets/walled.png";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import SubmitButton from "../components/SubmitButton";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleChangeEmail = (text) => {
    setEmail(text);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setErrorEmail("Email tidak valid!");
    } else {
      setErrorEmail("");
    }
  };

  const handleChangePassword = (text) => {
    setPassword(text);

    if (password.length < 8) {
      setErrorPassword("Password tidak valid");
    } else {
      setErrorPassword("");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={walledLogo} />
        </View>
        <View style={styles.form}>
          <View>
            <Input
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => handleChangeEmail(text)}
            />
            {errorEmail && <Text style={styles.error}>{errorEmail}</Text>}
          </View>

          <View>
            <Input
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => handleChangePassword(text)}
            />
            {errorPassword && <Text style={styles.error}>{errorPassword}</Text>}
          </View>
        </View>

        <View>
          <SubmitButton onPress={() => alert("Logged In")}>Login</SubmitButton>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.registerLink}>Register here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  logoContainer: {
    alignItems: "center",
  },
  form: {
    gap: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 14,
    color: "black",
  },
  registerLink: {
    fontSize: 14,
    color: "#088A85",
  },
  error: {
    color: "red",
  },
});

export default LoginScreen;
