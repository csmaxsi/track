import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext.js";
import { navigate } from "../navigationRef.js";

export default () => {
    const { createTracks } = useContext(TrackContext);
    const { state:{ locations, name}, reset} = useContext(LocationContext);

    const saveTrack = async () => {
       await createTracks( name, locations);
       reset();
       navigate('TrackList');

    };

    return [saveTrack];
};