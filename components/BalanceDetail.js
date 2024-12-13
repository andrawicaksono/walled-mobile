// BalanceDetail.js
import { View, StyleSheet } from "react-native";
import BalanceInfo from "./BalanceInfo";
import IconActions from "./IconActions";

const BalanceDetail = ({ balance }) => {
  return (
    <View style={styles.container}>
      <BalanceInfo balance={balance} />
      <IconActions />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    margin: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default BalanceDetail;
