import React from "react";
import {View, StyleSheet, Text, Button} from 'react-native';


const TrackListScreen = ({ navigation }) => {
    return (
        <View style = {styles.Container}>
            <Text>TrackListScreen</Text>
            <Button
                title="go to track detail"
                onPress={() => navigation.navigate('TrackDetail')}
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

export default TrackListScreen;