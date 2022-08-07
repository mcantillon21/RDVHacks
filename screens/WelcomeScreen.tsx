import { StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image } from 'react-native';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from "react-native";

import React, { useEffect, useState } from 'react'
import { auth, firebase } from '../emailConfig';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function WelcomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Root', {screen: 'Home'})
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }
  
  return (
    <KeyboardAvoidingView
    // behavior="padding"
    style={{flex: 1}}
    >
      <LinearGradient
                  colors={[ '#4142DB', '#C43092', '#EE2A7B', '#F49154', ]}
                  start={{x: 0, y: 0.2}}
                  end={{x: 1, y: .9}}
                  style={{width:'100%', height:'100%'}}
              >
        <KeyboardAvoidingView style={styles.pageContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.h1}>Union</Text>
            <Text style={styles.h2}>find old and new friends in your city.</Text>
          </View>
          <KeyboardAvoidingView style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#fff" 
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.inputField}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#fff" 
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.inputField}
              secureTextEntry
            />
            <Pressable
              style={styles.dropShadow}
              onPress={handleSignUp}
              >
                <View
                    style={styles.registerButton}
                >
                <Text style={styles.registerText}>Find Your Unions</Text>
                </View>
            </Pressable>
          </KeyboardAvoidingView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingHorizontal: 24,
    paddingTop: 64,
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  registerButton: {
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  registerText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  dropShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    position: 'relative',
    marginTop:'auto',
    marginBottom: 360
  },
  inputField: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 2,
    marginTop: 5,
    marginBottom: 8
  },
  headerContainer: {
    width: '100%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 64,
    backgroundColor: 'transparent',
    alignSelf:'flex-start',
    marginTop: 16,
    // marginBottom: 300,
    position: 'relative'
  },
  h1: {
    fontSize: 48,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  h2: {
    fontSize: 21,
    fontWeight: '500',
    color: '#fff',
  }
});
