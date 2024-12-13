import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AppBar from "../components/AppBar";
import Greeting from "../components/Greeting";
import DetailRow from "../components/DetailRow";
import BalanceDetail from "../components/BalanceDetail";
import TransactionHistory from "../components/TransactionHistory";
import BottomAppBar from "../components/BottomAppBar";
import photo from "../assets/photo.jpeg";

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
          <BalanceDetail balance={10000000} />
          <TransactionHistory />
        </ScrollView>
        <BottomAppBar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafbfd",
  },
});

export default HomeScreen;
