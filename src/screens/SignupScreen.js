import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer from "../components/Spacer";
import { Context as AuthContext} from "../context/AuthContext";


const SignupScreen = ({navigation}) => {
    
    const { state, signup } = useContext(AuthContext);
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    return (
        <View style = {styles.Container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer />
            <Input 
                label = "Email"
                value = {email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}

            />
            <Spacer />
            <Input 
                label="Password" 
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            
            />

            {state.errorMessage ? (
                <Text style={styles.errorMessage}>{state.errorMessage}</Text>
            ) : null}
            <Spacer>
                 <Button title = "Sign Up" onPress={() => signup({email, password})}/>
            </Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')} >
                <Text style = { styles.touch }>Already have an account ? Sign In !</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
    Container:{
        
        flex:1,
        justifyContent: "center",
        marginBottom: 200
    }, 
    errorMessage:{
        fontSize: 16,
        color:'red',
        marginLeft:15,
    },
    touch:{
        color:'blue',
        marginLeft:15
    }
});

export default SignupScreen;