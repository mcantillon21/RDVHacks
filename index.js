import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert} from 'react-native'
import React, {useRef, useState} from 'react'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from './config';
import firebase from 'firebase/compat/app';

const Otp = () => {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phone, recaptchaVerifier.current)
            .then(setVerificationId);
            setPhone('');
    };

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase.auth().signInWithCredential(credential)
        .then(() => {
            setCode('');
        })
        .catch((error) => {
            alert(error);
        })
        Alert.alert(
            'Login Successful. Welcome to Dashboard',
        );
    }

    return (
        <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
        />
        <Text style={StyleSheet.otpText}>
            Login using OTP
        </Text>
        <TextInput
            placeholder="Phone Number with Country Code"
            onChangeText={setPhone}
            keyboardType='phone-pad'
            autoCompleteType='tel'
            style={styles.textInput}
        />
        <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
            <Text style={styles.buttonText}>Send verification</Text>
        </TouchableOpacity>
    </View>

    )
}

export default Otp

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      padding: 20,
      margin: 10,
    },
    textInput: {
        padding: 40,
        fontSize: 24,
    },
    sendVerification: {
        padding:20,
        backgroundColor:'#3498db'
    },
    sendCode: {
        padding:20,
        backgroundColor:'#9b59b6'
    },
    buttonText: {
        textAlign: center
    }, 
    otpText: {
        fontSize:20,
    },
    top: {
      flex: 0.3,
      backgroundColor: 'grey',
      borderWidth: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    middle: {
      flex: 0.3,
      backgroundColor: 'beige',
      borderWidth: 5,
    },
    bottom: {
      flex: 0.3,
      backgroundColor: 'pink',
      borderWidth: 5,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
  });
