import { useNavigation } from "@react-navigation/native";
import { useAuth } from "./contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  const navigation = useNavigation();

  if (!auth) return navigation.navigate("Login");

  return children;
};

export default ProtectedRoute;
