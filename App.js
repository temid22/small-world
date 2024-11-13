import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContextProvider } from './context/AuthContext';
import CommunityScreen from './screens/CommunityScreen';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen
              name='HomeScreen'
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='LoginScreen'
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='RegisterScreen'
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='CommunityScreen'
              // component={CommunityScreen}
              options={{ headerShown: false }}
            >
              {() => (
                <ProtectedRoute>
                  <CommunityScreen />
                </ProtectedRoute>
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
