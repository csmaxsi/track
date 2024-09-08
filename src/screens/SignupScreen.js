import React, { useContext, useCallback, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from "../components/Spacer";
import { Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { useFocusEffect } from "@react-navigation/native";



const SignupScreen = () => {
    
    const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    },[]);
    
    useFocusEffect (
        useCallback(() =>{
            clearErrorMessage();
        },[])
    );
   

    return (
        <View style = {styles.Container}>
            <AuthForm
                headerText ="Sign up for Trackers"
                errorMessage ={state.errorMessage}
                submitButtonText ="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                text="Already have an account Sign In !"
                routeName= "SignIn"

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

export default SignupScreen;