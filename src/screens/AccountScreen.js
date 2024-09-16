import React, { useContext } from "react";
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";


const AccountScreen = () => {

    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView>
            
            <Button
                style={styles.btn}
                title="Sign Out"
                onPress={signout}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create ({
    btn:{
        
        marginTop:100,
        marginLeft:30,
        marginRight:30
    }
});

export default AccountScreen;