import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';




const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return { ...state, errorMessage: action.payload};
        case 'signup':
            return {errorMessage: '', token: action.payload};
        default:
            return state;
    }
};

//returns a function , (a,b) => a+b; which return --->
const signup = dispatch => async ({ email, password }) => {
        
    try{
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token});
        
        navigate('Main Flow');
        //console.log(response.data);
    } catch(err) {
        dispatch({ type: 'add_error', payload: 'Something wrong with the signup'});
    }
 };


const signin = dispatch => {
    return ({ email, password }) => {
        
    };
};

const signout = dispatch => {

};

export const { Provider, Context} = createDataContext (
    authReducer,
    {signup, signin, signout},
    {token: null, errorMessage: ''}
); 