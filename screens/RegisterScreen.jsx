import React, { useState } from "react";
import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import walledLogo from "../assets/walled.png";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";
import AuthButton from "../components/AuthButton";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const [errorFullname, setErrorFullname] = useState("");
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

  const handleChangeFullname = (text) => {
    setFullname(text);

    if (password.length < 8) {
      setErrorFullname("Fullname tidak valid");
    } else {
      setErrorFullname("");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={walledLogo} />
        </View>
        <View style={styles.form}>
          <Input
            placeholder="Fullname"
            value={fullname}
            onChangeText={(text) => handleChangeFullname(text)}
          />
          {errorFullname && <Text>{errorFullname}</Text>}
          <Input
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => handleChangeEmail(text)}
          />
          {errorEmail && <Text>{errorEmail}</Text>}
          <Input
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => handleChangePassword(text)}
          />
          {errorPassword && <Text>{errorPassword}</Text>}
          <Input
            placeholder="Avatar Url"
            value={avatar}
            onChangeText={(text) => setAvatar(text)}
          />
          <View style={styles.termsContainer}>
            <Checkbox
              status={isChecked ? "checked" : "unchecked"}
              color="#088A85"
              onPress={() => setIsChecked((prev) => !prev)}
            />
            <Text style={styles.termsText}>
              I have read and agree to the{" "}
              <Text style={styles.termsLink}>Terms and Conditions</Text>
              <Text style={{ color: "#FF0000" }}> *</Text>
            </Text>
          </View>
        </View>

        <View>
          <AuthButton onPress={() => alert("Registered")}>Register</AuthButton>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text style={styles.loginLink}>Login here</Text>
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
  termsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 50,
  },
  termsText: {
    color: "#000",
    flexShrink: 1,
    width: 260,
  },
  termsLink: {
    color: "#088A85",
  },
  registerButton: {
    backgroundColor: "#088A85",
    borderRadius: 6,
    alignItems: "center",
    paddingVertical: 12,
    width: "90%",
  },
  registerButton: {
    backgroundColor: "#088A85",
    borderRadius: 6,
    alignItems: "center",
    paddingVertical: 12,
    width: "90%",
  },
  buttonContainer: {
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingVertical: 10,
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  footerText: {
    fontSize: 14,
    color: "black",
  },
  loginLink: {
    fontSize: 14,
    color: "#088A85",
  },
});

export default LoginScreen;
