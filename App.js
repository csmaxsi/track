import React, {useRef, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, StatusBar, View } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackCreateDetail from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider }  from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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
    <TrackStack.Screen name = "Track Details" component = {TrackDetailScreen} />
  </TrackStack.Navigator>
);

const BottomTab = createBottomTabNavigator();
const MainFlow = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen 
      name = "Tracks" 
      component={TrackListFlow} 
      options={{
        tabBarIcon: () => (
          <FontAwesome name="road" size={24} color="black" />
        )
      }}  
    />
    <BottomTab.Screen 
      name = "Create Track" 
      component={TrackCreateDetail} 
      options={{ 
        headerShown: true, 
        tabBarIcon: () => (
          <FontAwesome name="plus" size={24} color="black" />
        ) 
      }}

    />
    <BottomTab.Screen 
      name = "Account" 
      component={AccountScreen} 
      options={{ 
        headerShown: true,
        tabBarIcon: () =>(
          <MaterialCommunityIcons name="account" size={24} color="black" />
        ) 
      }}  
    />
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
    <TrackProvider>
      <LocationProvider>
      <AuthProvider>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" backgroundColor="black" />
            <NavigationContainer ref={navRef}>
              <Stack.Navigator initialRouteName="Default" screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Default' component = {ResolveAuthScreen} />
                <Stack.Screen name="Login Flow" component = {LoginFlow} options={{ headerShown: false }} />
                <Stack.Screen name="Main Flow" component = {MainFlow} />
              </Stack.Navigator>
            </NavigationContainer>
        </View>
      </AuthProvider>
    </LocationProvider>
    </TrackProvider>
    
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
