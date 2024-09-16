import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

const trackReducer = ( state, action) => {
    switch (action.type){
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
};

const fetchTracks = dispatch => async () => {
    
    try {
        const response = await trackerApi.get('/tracks');
        dispatch({ type: 'fetch_tracks', payload: response.data });
    } catch (err) {
        console.error("Failed to fetch tracks:", err);
        // You might want to dispatch an error state or show an error message to the user
    }
};
const createTracks = dispatch => async ( name, locations) => {
    await trackerApi.post('/tracks', { name, locations});
    
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTracks },
    []
);
