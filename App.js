import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "tailwind-react-native-classnames";

export default function App() {
  return (
    <View style={tw`flex flex-1 items-center justify-center`}>
      <Text>This is the authentication 🔥</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});
