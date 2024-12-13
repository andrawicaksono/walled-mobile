import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = useColorScheme(); // Detect system theme

  return (
    <SafeAreaProvider>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <SafeAreaView
          style={[
            styles.container,
            colorScheme === "dark" && styles.darkBackground,
          ]}
        >
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Home",
                headerStyle: {
                  backgroundColor:
                    colorScheme === "dark" ? "#1f1f1f" : "#fafbfd",
                },
                headerTintColor: colorScheme === "dark" ? "#fff" : "#000",
              }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafbfd",
  },
  darkBackground: {
    backgroundColor: "#121212",
  },
});
