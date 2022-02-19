import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import tw from "tailwind-react-native-classnames";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={tw`bg-white flex w-full border border-gray-200 rounded-sm px-5 my-5 justify-center flex-1`}>
            <TextInput
                value={value}
                onChangeText={setValue}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder} />
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
