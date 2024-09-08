import React, {useRef, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackCreateDetail from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider }  from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

const AuthStack = createStackNavigator();
const LoginFlow = () => (
  <AuthStack.Navigator initialRouteName="Signup">
    <AuthStack.Screen name = "Signup" component = {SignupScreen} options={{ headerShown: false }} />
    <AuthStack.Screen name = "SignIn" component = {SigninScreen} options={{ headerShown: false }}/>
  </AuthStack.Navigator>
);

const TrackStack = createStackNavigator();
const TrackListFlow = () => (
  <TrackStack.Navigator >
    <TrackStack.Screen name = "TrackList" component = {TrackListScreen} options={{ headerShown: false }}/>
    <TrackStack.Screen name = "TrackDetail" component = {TrackDetailScreen} />
  </TrackStack.Navigator>
);

const BottomTab = createBottomTabNavigator();
const MainFlow = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen 
      name = "Tracks" 
      component={TrackListFlow}
      options={{ headerShown: false }}
    />
    <BottomTab.Screen name = "Create Track" component={TrackCreateDetail}/>
    <BottomTab.Screen name = "Account" component={AccountScreen} options={{ headerShown: false }}/>
  </BottomTab.Navigator>
);

const Stack = createStackNavigator();

export default function App() {

  const navRef = useRef(null);  // Use ref to keep the navigator reference

  useEffect(() => {
    if (navRef.current) {
      setNavigator(navRef.current);  // Set the navigator when it's ready
    }
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer ref={navRef}>
        <Stack.Navigator initialRouteName="Default" screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Default' component = {ResolveAuthScreen} />
          <Stack.Screen name="Login Flow" component = {LoginFlow} options={{ headerShown: false }} />
          <Stack.Screen name="Main Flow" component = {MainFlow} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
