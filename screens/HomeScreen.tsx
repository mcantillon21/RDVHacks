import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image } from 'react-native';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';
import { FlatList } from 'react-native';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const [location, setLocation] = useState('Loading...');

  const peopleData = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Emmet Halm",
      image: require('../assets/images/EAH.png'),
      university: 'Harvard',
      community: 'DAOHQ',
      bio: 'Crypto buff. Loves weightlifting and playing video games.',
      hometown: 'Dallas, TX'
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Robert Wachen",
      image: require('../assets/images/robert.jpeg'),
      university: 'Harvard',
      community: 'Prod Cohort 1.0',
      bio: 'Jazz musician, comedy writer, and coder. Loves to play the piano and the guitar.',
      hometown: 'Potomac, MD'
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Molly Cantillon",
      image: require('../assets/images/molly.jpeg'),
      university: 'Stanford',
      community: 'KP Fellow',
      bio: 'Professional super nerd - loves the beach and good food.',
      hometown: 'Livingston, NJ'
    },
    {
      id: "58694a0f-3da2-471f-bd96-145571e29d72",
      name: "Camron Sallade",
      image: require('../assets/images/Camron.jpeg'),
      university: 'Stanford',
      community: 'Fieldguide SWE',
      bio: 'Ice cream and coffee enthusiast. Love to play the harpiscord and skateboard.',
      hometown: 'Rochester, NY'
    }
  ];
  
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    let reverseGeocodedLocation = await Location.reverseGeocodeAsync({
      latitude : location.coords.latitude,
      longitude : location.coords.longitude
  });

    // console.log('location', location);
    // console.log('reverseGeocodedLocation', reverseGeocodedLocation);
    console.log('done!')
    setLocation(reverseGeocodedLocation[0].city + ", " + reverseGeocodedLocation[0].region);
    // handleNavigate(location);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.pageContainer}>
        {/* <View style={{marginBottom: 16}}>
          <Image 
                source={require('../assets/images/avatar.png')} 
                style={{height: 36, width: 36, alignSelf: 'flex-end'}}
            ></Image>
        </View> */}
        <View style={{flexDirection:'row', marginBottom: 24, alignItems: 'center'}}>
          <View style={styles.locationContainer}>
              <Text style={styles.emoji}>📍</Text>
              <Text style={styles.title}>{location}</Text>
          </View>
          <Pressable
          style={{marginLeft: 'auto'}}
          onPress={() => {navigation.push('EditProfile')}}
          >
            <Image 
                  source={require('../assets/images/avatar.png')} 
                  style={{height: 36, width: 36, tintColor: '#6B696B'}}
            />
          </Pressable>
        </View>
        <View style={styles.searchBar}>
            <Image 
                source={require('../assets/images/search.png')} 
                style={{height: 12, width: 12, marginRight: 8}}
            ></Image>
            <Text style={styles.h3}>Search</Text>
        </View>
        <FlatList
          data={peopleData}
          renderItem={({ item, index, separators }) => (
            <PersonContainer 
            key={item.id}
            navigation={navigation}
            name={item.name}
            image={item.image}
            university={item.university}
            community={item.community}
            bio={item.bio}
            hometown={item.hometown}
            />
          )}
        
        >
          
        </FlatList>
        
        
        <Pressable
        style={{
          marginTop: 'auto',
          marginBottom: 64,
          paddingHorizontal: 16, 
          paddingVertical: 8, 
          alignItems: 'center', 
          justifyContent: 'center', 
          alignSelf: 'center',
          backgroundColor: '#CC3D3D',
          // width: 150,
          borderRadius: 100,
        }}
        onPress={async () => await getLocation()}
        >
          <Text style={{
            fontWeight: '600',
            fontSize: 17,
            color: '#fff',
          }}>
            Update Location
          </Text>
      </Pressable>

    </View>
    
  );
}

// use the instagram API to get the user's full name and bio
// function getInstagramUserInfo(userId: string) {
//     return fetch(`https://graph.instagram.com/${userId}?fields=full_name,biography&access_token=${INSTAGRAM_ACCESS_TOKEN}`)
//         .then(response => response.json())
//         .then(json => json.data);
// }

const PersonContainer = (props: any) => {
  // const nav = useNavigation();

  // console.log(props)

    return (
        <Pressable
        onPress={() => {
          props.navigation.push('Profile', {person: props })
        }}
        style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? '#f8f8f8'
                : '#fff'
            },
            styles.personRowContainer
          ]}>
            {/* <View style={styles.personRowContainer}> */}
                <View 
                style={{flexDirection:'row', alignItems: 'center', backgroundColor:'transparent'}}
                >
                    <Image 
                        source={props.image} 
                        style={{marginRight: 8, height: 40, width: 40, borderRadius:100}}
                    />
                    <View style={{backgroundColor:'transparent'}}>
                        <Text style={[styles.h2, {marginBottom: 4}]}>{props.name}</Text>
                        <View style={{flexDirection: 'row', backgroundColor:'transparent'}}>
                            <View style={styles.communityContainer}>
                                <Text style={styles.communityText}>🎓 {props.university}</Text>
                            </View>
                            <View style={[styles.communityContainer, {backgroundColor: '#E5F6FF'}]}>
                                <Text style={[styles.communityText, {color: '#3D9CCC'}]}>🦄 {props.community}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Image
                        source={require('../assets/images/arrow.jpg')} 
                        style={{height: 14, width: 8}}
                />
            {/* </View>              */}
         </Pressable>
    )
}

const styles = StyleSheet.create({
  pageContainer: {
    paddingHorizontal: 24,
    paddingTop: 64,
    backgroundColor:'#fff',
    height: '100%',
    width: '100%',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '80%',
  },
  personRowContainer: {
    paddingRight: 8,
    borderBottomColor: '#CBC7CC',
    borderBottomWidth: 1,
    height: 66,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  communityContainer: {
    borderRadius: 100,
    backgroundColor: '#FFE5E5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  emoji: {
    fontSize: 48,
    marginRight: 8,
  },
  searchBar: {
    backgroundColor: '#F7F6F7',
    borderRadius: 8,
    width: '100%',
    height: 28,
    alignItems: 'center',
    paddingLeft: 8,
    marginBottom: 8,
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 15,
    fontWeight: '600',
  },
  h3: {
    fontSize: 13,
    fontWeight: '600',
  },
  communityText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#CC3D3D'
  }
});
