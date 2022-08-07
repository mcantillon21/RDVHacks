import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import { doc, setDoc } from "firebase/firestore"; 
import { auth } from '../emailConfig';
import { getDatabase } from 'firebase/database';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const [headerText, setHeaderText] = useState('Edit Your Profile');
  const [image, setImage] = useState('https://i.imgur.com/XyqQRVH.png');
  const [profileChanged, setProfileChanged] = useState(true);

  // const [email, setEmail] = useState('')
  // const [phone, setPhone] = useState('')
  // const [name, setName] = useState('')
  // const [city, setCity] = useState('')
  // const [state, setState] = useState('')
  // const [university, setUniversity] = useState('')
  // const [bio, setBio] = useState('')


  const db = getDatabase();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  // state management
  const updateProfile = async () => {
    // await setDoc(doc(db, "cities", "LA"), {
    //   id: auth.currentUser?.getIdToken(),
    //   email: auth.currentUser?.email || '',
    //   phone: auth.currentUser?.phone || '',
    //   name: auth.currentUser?.name || '',
    //   city: auth.currentUser?.city || '',
    //   state: auth.currentUser?.state || '',
    //   university: auth.currentUser?.university || '',
    //   bio: auth.currentUser?.bio || '',
    // },
    // { 
    //   merge: true 
    // }
    // );

    // console.log('profile updated!');
    // setProfileChanged(false)
    // navigation.pop()

    
    if (profileChanged)
    {
      console.log('profile updated!');
      setProfileChanged(false)
      navigation.pop()
    }

  }



  // setHeaderText('Finalize Your Profile');

  const handleSignOut = () => {
    console.log('Signing out');
    auth.signOut();
  }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <Text style={{fontWeight: '600', fontSize: 17}}>{headerText}</Text>
        <Pressable
        style={{marginLeft: 'auto'}}
        onPress={() => {updateProfile()}}
        >
          <Text 
          style={
            profileChanged ?
            {fontWeight: '600', fontSize: 17, color:'#0098FD'}
            :
            {fontWeight: '600', fontSize: 17, color:'#D9D9D9'}
          }
          >
            Done
          </Text>
        </Pressable>
        
      </View>

      <View style={styles.profileImageContainer}>
        <Pressable style={{alignItems: 'center',}}
        onPress={pickImage}
        >
          <Image 
          source={{uri:image}}
          style={{height: 96, width: 96, marginBottom: 8, borderRadius: 100}}
          // {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          />
          <Text style={{color: '#0076F8', fontWeight: '600', fontSize: 13}}> Change profile photo</Text>
        </Pressable>
      </View>

      <ProfileItem navigation={navigation} name='Full Name'/>
      <ProfileItem navigation={navigation} name='Email'/>
      <ProfileItem navigation={navigation} name='Phone'/>
      <ProfileItem navigation={navigation} name='City'/>
      <ProfileItem navigation={navigation} name='University'/>
      {/* <ProfileItem navigation={navigation} name='Instagram'/> */}
      <ProfileItem navigation={navigation} name='LinkedIn'/>
      <ProfileItem navigation={navigation} name='Bio'/>


      <Pressable
        style={styles.logOutButton}
        onPress={handleSignOut}
        >
          <Text style={styles.logOutText}>Log Out</Text>
      </Pressable>

      
    </View> 
    
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    // </View>
  );
}

const ProfileItem = ({navigation, name}) => {
  return (
    <View style={styles.profileItemContainer}>
        <View style={styles.profileItemNameContainer}>
          <Text>{name}</Text>
        </View>
        <Pressable 
        onPress={() => {navigation.push('EditProfileInfo')}}
        style={styles.profileItemDescriptionContainer}
        >
          <Text>Test Description</Text>
        </Pressable>
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
  profileImageContainer: {
    width: '100%',
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#D0D1D3',
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
  },
  logOutButton: {
    marginTop: 'auto',
    marginBottom: 64,
    paddingHorizontal: 16, 
    paddingVertical: 8, 
    alignItems: 'center', 
    justifyContent: 'center', 
    alignSelf: 'center',
    backgroundColor: '#CC3D3D',
    width: 100,
    borderRadius: 100
  },
  logOutText: {
    fontWeight: '600',
    fontSize: 17,
    color: '#fff',
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
