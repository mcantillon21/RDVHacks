import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image } from 'react-native';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native';
import React, { useState } from 'react';
import { scraper } from './scraper';

export default function LinkedInScreen({ navigation }: RootTabScreenProps<'Home'>) {

    const [username, setUsername] = useState('')
    const [done, setDone] = useState(false)

    console.log(username)
    scraper(username)
    // if (user) {
    //     navigation.navigate('Root', {screen: 'Home'})
    // }

  return (
    <View style={styles.pageContainer}>
        <Pressable
        style={styles.dropShadow}
        >
            <LinearGradient
                colors={['#00a0dc', '#0072b1']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 1}}
                style={styles.instagramButton}
            >
            <Text style={styles.instagramText}>Your LinkedIn Handle</Text>
            </LinearGradient>
        </Pressable>
        <View style={styles.passwordContainer}>
          <Text>/in/</Text>
          <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="useless placeholder"
            />
        </View>
        <Pressable
            style={styles.messageButton}
            onPress={() => setDone(true)}
            >
                <Text style={{fontSize: 16, fontWeight: '600'}}>Done</Text>
        </Pressable>
    </View>
    
  );
}

const styles = StyleSheet.create({
    input: {
        marginLeft: 8,
        borderWidth: 0,
      },
      messageButton: {
        backgroundColor:'#EFEFEF', 
        marginLeft: 4, 
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        paddingVertical: 8
      },
      passwordContainer: {
        marginTop: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
      },
  pageContainer: {
    paddingHorizontal: 24,
    paddingTop: 64,
    backgroundColor:'#fff',
    height: '100%',
    width: '100%',
  },
  instagramButton: {
    marginTop: 50,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 100,
    alignItems: 'center',
  },
  instagramText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  dropShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  }

});
