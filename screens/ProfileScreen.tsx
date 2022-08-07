import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image } from 'react-native';
import { Pressable } from 'react-native';

export default function ProfileScreen(props: any, { navigation }: RootTabScreenProps<'Home'>) {
  console.log('aAsnda', props)
  return (
    <View style={styles.pageContainer}>
        <View style={styles.profileNav}>
            <Pressable
            style={{marginRight: 'auto'}}
            onPress={() => {
              props.navigation.pop();
              // navigation.goBack();
              // navigation.navigate('Root', {screen: 'Home'})
            }}
            >
                <Image
                            source={require('../assets/images/arrow.jpg')} 
                            style={{height: 18, width: 12, transform: [{rotate: '180deg'}]}}
                />
            </Pressable>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', marginBottom: 16}}>
            <Image 
                            source={props.route.params.person.image} 
                            style={{marginRight: 24, height: 86, width: 86, borderRadius:100}}
            />
            <View>
                <Text style={styles.title2}>{props.route.params.person.name}</Text>
                <Text style={styles.subtitle2}>📍  in New York City, NY</Text>
                <Text style={styles.subtitle2}>🌎  {props.route.params.person.hometown}</Text>
            </View>
        </View>
        <View style={{marginBottom: 8}}>
            <Text style={styles.subtitle2}>{props.route.params.person.bio}</Text>
        </View>
        <View style={{flexDirection:'row', paddingBottom: 28}}>
            <Pressable
            style={styles.addButton}
            >
                <Text style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>Add</Text>
            </Pressable>
            <Pressable
            style={styles.messageButton}
            >
                <Text style={{fontSize: 16, fontWeight: '600'}}>Message</Text>
            </Pressable>
        </View>
        {/* <Text>todo</Text> */}
    </View>
    
  );
}


const styles = StyleSheet.create({
  pageContainer: {
    paddingHorizontal: 24,
    paddingTop: 64,
    backgroundColor:'#fff',
    height: '100%',
    width: '100%',
  },
  profileNav: {
    height: 24, 
    width: '100%', 
    backgroundColor:'transparent', 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    flexDirection: 'row',
  },
  profileNavText: {
    fontSize: 16, 
    fontWeight: '600',
  },
  locationContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
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
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  h2: {
    fontSize: 15,
    fontWeight: '600',
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  h3: {
    fontSize: 13,
    fontWeight: '600',
  },
  communityText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#CC3D3D'
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
  addButton: {
    backgroundColor:'#E94359', 
    marginRight: 4, 
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingVertical: 8,
  }
});
