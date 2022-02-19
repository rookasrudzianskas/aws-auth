import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import tw from "tailwind-react-native-classnames";
import CustomInput from "../../components/CustomInput/CustomInput";

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={tw`flex items-center p-5`}>
            <Image style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" source={Logo} />
            <CustomInput placeholder={"Username"} value={username} setValue={setUsername}  />
            <CustomInput placeholder={"Password"} value={password} setValue={setPassword} />
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
   logo: {
       width: '70%',
       maxWidth: 500,
       maxHeight: 200,
   }
});
