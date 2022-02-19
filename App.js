import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "tailwind-react-native-classnames";

export default function App() {
  return (
    <View style={tw`flex flex-1 items-center justify-center`}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});
