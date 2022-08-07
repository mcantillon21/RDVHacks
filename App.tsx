import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Otp from './index';

import { firebaseConfig } from './config';
import React, { useRef, useState } from 'react';

import { Text, View } from './components/Themed';
import { Pressable } from 'react-native';

import {RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

import firebase from 'firebase/compat/app';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity, TextInput } from 'react-native';

import { StyleSheet } from 'react-native';


import Constants from 'expo-constants';

import LoginScreen from './screens/LoginScreen';


import {auth} from './emailConfig'
import { RootTabScreenProps } from './types';


export default function App({ navigation }: RootTabScreenProps<'Home'>) {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [currentUser, setCurrentUser ] = useState(null);

  if (!isLoadingComplete) {
    return null;
  } else {

  auth.onAuthStateChanged(user => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });

  // need to do state management so it auto-updates
  if (currentUser)
  {
    return (
      <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
      </SafeAreaProvider>
    );
  }
  else
  {
    return (
      <LoginScreen></LoginScreen>
    );
  }
  
    
    
  }
}