import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext  } from "../context/TrackContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {

    const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext);
    //console.log(locations.length);

    const [saveTrack] = useSaveTrack();

    return (
        <>
            <Spacer>
            <Input value={name} onChangeText={changeName} placeholder="Enter Track Name" />
            </Spacer>
            <Spacer>
            { recording ? (
                <Button title="Stop" onPress={stopRecording}/>
            ) : (
                <Button title="Start Recording" onPress={startRecording}/>     
            )}
            </Spacer>
            <Spacer>
            { !recording && locations.length? (
                <Button title ="Save Recording"  onPress= {saveTrack}/>
              ) : null }
            
            </Spacer>
            
        </>    
        
    );
};

const styles = StyleSheet.create ({

});

export default TrackForm;