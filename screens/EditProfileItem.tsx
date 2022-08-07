import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image, TextInput } from 'react-native';
import { useState } from 'react';

export default function EditProfileInfo({ navigation }: RootTabScreenProps<'Home'>) {

  const [profileItemChanged, setProfileItemChanged] = useState(true);


  const updateProfile = () => {
    if (profileItemChanged)
    {
      console.log('profile item updated!');
      setProfileItemChanged(false)
      navigation.pop();
    }
  }


  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <Pressable
        onPress={() => {navigation.pop()}}
        >
          <Image
            source={require('../assets/images/arrow.jpg')} 
            style={{height: 18, width: 12, transform: [{rotate: '180deg'}]}}
          />
        </Pressable>
        <Text style={{marginLeft: 'auto', fontWeight: '600', fontSize: 17}}>Edit Bio</Text>
        <Pressable
        style={{marginLeft: 'auto'}}
        onPress={() => {updateProfile()}}
        >
          <Text 
          style={
            profileItemChanged ?
            {fontWeight: '600', fontSize: 17, color:'#0098FD'}
            :
            {fontWeight: '600', fontSize: 17, color:'#D9D9D9'}
          }
          >
            Done
          </Text>
        </Pressable>
      </View>

      <ProfileItem/>


      
    </View> 
    
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    // </View>
  );
}

const ProfileItem = () => {
  return (
    <View style={styles.profileItemContainer}>
        <View style={styles.profileItemNameContainer}>
          <Text>Name Here</Text>
        </View>
        <View style={styles.profileItemDescriptionContainer}>
          <TextInput
          multiline={true}
          placeholder="Bio"
          >
            Test Description
          </TextInput>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingHorizontal: 24,
    backgroundColor:'#fff',
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    width: '100%',
    height: 88,
    paddingTop: 52,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#D0D1D3',
    justifyContent: 'center',
  },
  profileItemContainer: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
  },
  profileItemNameContainer: {
    width: '29%',
    height: '100%',
    justifyContent: 'center',
  },
  profileItemDescriptionContainer: {
    width: '71%',
    height: '100%',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#D0D1D3',
  }
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
});
