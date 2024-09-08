import React, { useContext } from "react";
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";


const AccountScreen = () => {

    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView>
            <Text>AccountScreen</Text>
            <Button
            
                title="Sign Out"
                onPress={signout}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create ({});

export default AccountScreen;