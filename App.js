import React from "react";
import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TransferScreen from "./screens/TransferScreen";
import TopUpScreen from "./screens/TopUpScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

enableScreens();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <AuthProvider>
      {auth ? (
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { height: 60, paddingBottom: 10 },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Home",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Transfer"
            component={TransferScreen}
            options={{
              title: "Transfer",
              tabBarIcon: ({ color, size }) => (
                <Icon name="exchange" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Topup"
            component={TopUpScreen}
            options={{
              title: "Top Up",
              tabBarIcon: ({ color, size }) => (
                <Icon name="credit-card" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : null}
    </AuthProvider>
  );
};

export default function App() {
  const auth = useAuth();
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {auth ? (
            <Stack.Screen
              name="Home"
              component={TabNavigator}
              options={{ title: "Home", headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: "Login", headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ title: "Register", headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
