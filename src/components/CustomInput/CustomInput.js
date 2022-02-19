import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import tw from "tailwind-react-native-classnames";

const CustomInput = () => {
    return (
        <View style={tw`bg-white`}>
            <TextInput placeholder="This is placeholder" />
        </View>
    );
};

export default CustomInput;

const styles= StyleSheet.create({
    container: {

    },
    input: {

    }
});
