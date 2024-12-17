import React, { useState } from "react";
import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import walledLogo from "../assets/walled.png";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";
import SubmitButton from "../components/SubmitButton";
import TermsAndConditions from "../components/TermsAndConditions";
import { register } from "../api/ApiManager";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const [errorFullname, setErrorFullname] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [isTncVisible, setIsTncVisible] = useState(false);

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
      setErrorPassword("Password tidak boleh kurang dari 8 karakter");
    } else {
      setErrorPassword("");
    }
  };

  const handleChangeFullname = (text) => {
    setFullname(text);

    if (fullname.length < 1) {
      setErrorFullname("Nama wajib diisi dan tidak boleh kurang dari 1 kar");
    } else {
      setErrorFullname("");
    }
  };

  const handleRegister = async () => {
    if (errorEmail || errorFullname || errorPassword)
      throw new Error("Register Failed: Error Email/Fullname/Password");

    if (!email) {
      throw new Error("Register Failed: Email required");
    }
    if (!fullname) {
      throw new Error("Register Failed: Fullname required");
    }
    if (!password) {
      throw new Error("Register Failed: Password required");
    }

    const data = {
      full_name: fullname,
      email: email,
      password: password,
    };

    if (avatar) {
      data.avatar_url = avatar;
    }

    const response = await register(data);

    alert(response.message);

    if (!response.success) {
      throw new Error(response.message);
    }

    navigation.navigate("Login");
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
          {errorFullname && <Text style={styles.error}>{errorFullname}</Text>}
          <Input
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => handleChangeEmail(text)}
          />
          {errorEmail && <Text style={styles.error}>{errorEmail}</Text>}
          <Input
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => handleChangePassword(text)}
          />
          {errorPassword && <Text style={styles.error}>{errorPassword}</Text>}
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
              <Text
                onPress={() => setIsTncVisible(!isTncVisible)}
                style={styles.termsLink}
              >
                Terms and Conditions
              </Text>
              <Text style={{ color: "#FF0000" }}> *</Text>
            </Text>
          </View>
        </View>

        <View>
          <SubmitButton onPress={handleRegister}>Register</SubmitButton>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginLink}>Login here</Text>
            </TouchableOpacity>
            <TermsAndConditions
              isVisible={isTncVisible}
              onPressButton={() => setIsTncVisible(!isTncVisible)}
            />
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
  footer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  footerText: {
    fontSize: 14,
    color: "#000",
  },
  loginLink: {
    fontSize: 14,
    color: "#088A85",
  },
  error: {
    color: "red",
  },
});

export default RegisterScreen;
