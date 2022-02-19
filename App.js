import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from "tailwind-react-native-classnames";
import SignInScreen from "./src/screens/SignInScreen";

export default function App() {
  return (
      <SafeAreaView>
        <View style={tw`flex flex-1`}>
          <SignInScreen />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

})
