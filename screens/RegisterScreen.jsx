import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, fireAuth } from '../firebaseConfig'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigation } from '@react-navigation/native'


const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation()

  const handleSubmit = async () => {
    if (!email.includes('@') && !email.includes('.')) {
      return Alert.alert('please input a valid email')
    }
    try {

      const newUser = await createUserWithEmailAndPassword(fireAuth, email, password);
      console.log(newUser.user)
      if (newUser.user?.uid) {

      }
      navigation.navigate('CommunityScreen')

      // const date = new Date().getTime();
      // const storageRef = ref(storage, `${username + date}`);
      // await uploadBytesResumable(storageRef, file).then(() => {
      //   getDownloadURL(storageRef).then(async (downloadURL) => {
      //     try {
      //       //Update profile
      //       await updateProfile(res?.user, {
      //         displayName: username,
      //         photoURL: downloadURL,
      //       });
      //       //create user on firestore
      //       await setDoc(doc(db, 'users', res?.user?.uid), {
      //         uid: res?.user?.uid,
      //         displayName: username,
      //         email: email,
      //         photoURL: downloadURL,
      //       });

      //       //create empty user chats on firestore
      //       await setDoc(doc(db, 'userChats', res?.user?.uid), {});
      //       navigation.navigate('/CommunityScreen')
      //     } catch (err) {
      //       console.log(err);
      //       setErr(true);
      //       setLoading(false);
      //     }
      //   });
      // });
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create An Account</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          onChangeText={(text) => setUsername(text)}
          value={username}

        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={(text) => setEmail(text)}
          value={email}

        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry />
        <Button title='Submit' onPress={handleSubmit} />
        <Link to='/CommunityScreen' >Community</Link>
      </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '90%',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 16
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'semibold'
  },
})