import React from 'react';
import {Text, View, StyleSheet, Image, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import tw from "tailwind-react-native-classnames";

const SignInScreen = () => {
    const {height} = useWindowDimensions();

    return (
        <View style={tw`flex items-center p-5`}>
            <Image style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" source={Logo} />
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
   logo: {
       width: '70%',
       height: 100,
       maxWidth: 500,
   }
});
