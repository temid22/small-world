import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

    return currentUser ? children : (

        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>

    );
};

export default ProtectedRoute;