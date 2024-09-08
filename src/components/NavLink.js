import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { useNavigation } from '@react-navigation/native';


const NavLink = ({ text, routeName}) => {

    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)} >
                <Spacer>
                    <Text style = { styles.touch }>
                        {text}
                    </Text>
                </Spacer> 
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touch:{
        color:'blue',
        marginLeft:15
    }
});

export default NavLink;