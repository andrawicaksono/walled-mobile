import { ScrollView } from "react-native";
import AppBar from "../components/AppBar";
import Greeting from "../components/Greeting";
import DetailRow from "../components/DetailRow";
import BalanceDetail from "../components/BalanceDetail";
import TransactionHistory from "../components/TransactionHistory";

import photo from "../assets/photo.jpeg";
import BottomAppBar from "../components/BottomAppBar";

const HomeScreen = () => {
  return (
    <>
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
    </>
  );
};

export default HomeScreen;
