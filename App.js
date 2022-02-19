import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import SignInScreen from "./src/screens/SignInScreen";

export default function App() {
  return (
    <View style={tw`flex flex-1`}>
      <SignInScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

})
