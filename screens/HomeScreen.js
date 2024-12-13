import { ScrollView } from "react-native";
import AppBar from "../components/AppBar";
import Greeting from "../components/Greeting";
import DetailRow from "../components/DetailRow";
import BalanceDetail from "../components/BalanceDetail";
import TransactionHistory from "../components/TransactionHistory";

import photo from "../assets/photo.jpeg";
import BottomAppBar from "../components/BottomAppBar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar style="auto" />
        <ScrollView>
          <AppBar
            fullName="Chelsea Immanuela"
            accountType="Personal Account"
            photo={photo}
          />
          <Greeting firstName="Chelsea" />
          <DetailRow label="Account No." value="100899" />
          <BalanceDetail balance="Rp10.000.000" />
          <TransactionHistory />
        </ScrollView>
        <BottomAppBar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
