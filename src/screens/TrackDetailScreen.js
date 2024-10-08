import { useNavigation } from "@react-navigation/native";
import React, {useContext} from "react";
import {View, StyleSheet, Text} from 'react-native';
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({route}) => {
    const { state } = useContext(TrackContext);
    const _id =  route.params._id;

    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;

    return (
        <>
            <Text style = {{ fontSize: 48 }}>{track.name}</Text>
            <MapView
                initialRegion={{
                    longitudeDelta:0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords

                }}
                style = {styles.Map}
            >
                <Polyline coordinates={ track.locations.map(loc => loc.coords)} />

            </MapView>
        </>
    );
};

TrackDetailScreen.navigationOptions = {
  title: 'Track Details',
    
};

const styles = StyleSheet.create ({
    Container:{ 
        flex:1,
        justifyContent: "center",
        marginBottom: 200
    }, 
    Map:{
        height:300
    }
});

export default TrackDetailScreen;