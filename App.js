import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FisrtScreen from "./src/screens/FisrtScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Fisrt">
        <Stack.Screen name="Fisrt" component={FisrtScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Registration" component={RegistrationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}