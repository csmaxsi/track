import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return { ...state, errorMessage: action.payload};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'clear_error_message':
            return { ...state, errorMessage:''};
        case 'signout':
            return { token: null, errorMessage:''};
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token){
        dispatch({ type: 'signin', payload: token});
        navigate('Main Flow');
    }else{
        navigate('Login Flow');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
};

//returns a function , (a,b) => a+b; which return --->
const signup = dispatch => async ({ email, password }) => {
    
    try{
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token});
        navigate('Main Flow');
    } catch(err) {
        console.log(err);
        dispatch({ 
            type: 'add_error', 
            payload: 'Something wrong with the signup'
        });
    }
 };


const signin = dispatch => async ({ email, password }) => {
    console.log(email, password);
    try{
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token});
        console.log(response.data);
        navigate('Main Flow');
    } catch(err){
        console.log(err);
        dispatch({
            type: 'add_error',
            payload: 'Something Wrong with sign in'
        }); 
    }
};


const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout'});
    navigate('Login Flow');
};

export const { Provider, Context} = createDataContext (
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: ''}
); 