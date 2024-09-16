import React, { useContext, useEffect } from "react";
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import { Context as TrackContext } from "../context/TrackContext";
import { useNavigation } from "@react-navigation/native";
import { ListItem, Icon } from "react-native-elements";
import { SafeAreaView } from "react-native";


const TrackListScreen = () => {
    const { state, fetchTracks } = useContext(TrackContext);
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribeFocus = navigation.addListener('focus', fetchTracks);
        
        return () => {
          // Clean up the event listeners
          unsubscribeFocus();
        };
      }, [navigation]);
    
   

    return (
        <SafeAreaView forceInsert={{ top: 'always'}}>
            <FlatList
                data = {state}
                keyExtractor={ item => item._id }
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                                navigation.navigate('TrackDetail', { _id: item._id})
                            }}
                        >
                            <ListItem bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <Icon name="chevron-right" />
                            </ListItem>
                        </TouchableOpacity>
                    );
                }}
            />
        </SafeAreaView>
    );
};

TrackListScreen.navigationOptions = {
    title: 'Tracks'
};

const styles = StyleSheet.create ({
    
    Container:{ 
        flex:1,
        justifyContent: "center",
        marginBottom: 200
    }, 
    
});

export default TrackListScreen;