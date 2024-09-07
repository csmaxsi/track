import { CommonActions } from '@react-navigation/native';

let navigator;

// Sets navigator to the prop react navigator(nav)
export const setNavigator = (nav) => {
    navigator = nav;
};

// Dispatches an action to change the state and navigate to a different screen
export const navigate = (routeName, params) => {
    navigator.dispatch(
        CommonActions.navigate({
            name: routeName, // `routeName` has been renamed to `name` in React Navigation 6
            params
        })
    );
};
