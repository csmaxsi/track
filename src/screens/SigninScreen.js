import React from "react";
import {View, StyleSheet, Text, Button } from 'react-native';


const SigninScreen = ({navigation}) => {
    return (
        <View>
            <Text>SigninScreen</Text>
            <Button
                title="Go to signup"
                onPress ={() => navigation.navigate('Signup')}
            />
        </View>
    );
};

const styles = StyleSheet.create ({});

export default SigninScreen;