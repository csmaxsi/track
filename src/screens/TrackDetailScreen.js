import React from "react";
import {View, StyleSheet, Text} from 'react-native';


const TrackDetailScreen = () => {
    return (
        <View style = {styles.Container}>
            <Text>TrackDetailScreen</Text>
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

export default TrackDetailScreen;