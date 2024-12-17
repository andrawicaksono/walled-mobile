import React, { useState } from "react";
import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import walledLogo from "../assets/walled.png";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import SubmitButton from "../components/SubmitButton";
import { useAuth } from "../contexts/AuthContext";
import { postLogin } from "../api/ApiManager";

const LoginScreen = () => {
  const auth = useAuth();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (text) => {
    setEmail(text);
  };

  const handleChangePassword = (text) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await postLogin(data);
      alert(response.message);

      if (!response.success) {
        throw new Error(response.message);
      }

      await auth.login(response.data.token);

      navigation.navigate("Home");
    } catch (err) {
      console.error(err.message);
      throw err;
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
          </View>

          <View>
            <Input
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => handleChangePassword(text)}
            />
          </View>
        </View>

        <View>
          <SubmitButton onPress={handleLogin}>Login</SubmitButton>

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
