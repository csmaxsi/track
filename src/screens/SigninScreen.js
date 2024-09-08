import React, { useContext, useCallback } from "react";
import {View, StyleSheet, Text, Button } from 'react-native';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext} from "../context/AuthContext";
import { useFocusEffect } from "@react-navigation/native";

const SigninScreen = () => {

    const {state, signin, clearErrorMessage } = useContext(AuthContext);

    useFocusEffect(
        useCallback(() => {
            clearErrorMessage();
        },[])
    );
    return (
        <View style = {styles.Container}>
            <AuthForm
                headerText ="Sign In For Tracker"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />
            <NavLink
                text="Don't Have an account? Register Now !"
                routeName="Signup"
            />
        </View>
    );
};

const styles = StyleSheet.create ({
    Container:{ 
        flex:1,
        justifyContent: "center",
        marginBottom: 200
    }, 
});

export default SigninScreen;