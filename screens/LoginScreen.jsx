import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <View>
        <Text>Dont have an account ? </Text>
        <TouchableOpacity>
            <Link to='/RegisterScreen'>Register here</Link>   
        </TouchableOpacity>
    </View>
      </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})