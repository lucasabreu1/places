import React from 'react';
import {View, TextInput, StyleSheet, Alert, FlatList, Text, Image} from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import  ImagesAssets  from '../assets/ImagesAssets'

const PlaceItem = ({data}) => {
    return (
        <View style={styles.placeContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={ImagesAssets.cozinha}></Image>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.neighborhood}>{data.name}</Text>
              <Text style={styles.name}>{data.bairro}</Text>    
              <Text style={styles.title3}>Vila do Samba - Sao Paulo, SP</Text>
              {/* <Text style={styles.description} onPress={() => { getOnPressItem(data) }}>kakakakjsjsjksksksskaaaj</Text> */}
            </View>
        </View>
    )
  }

  const getOnPressItem = (data) => {
    Alert.alert(data);
  }

  export default PlaceItem

  const styles = StyleSheet.create({
    
    placeContainer: {
        flexDirection: 'row',     
        height: 100,
        marginTop:20,
        // backgroundColor: '#00BFA5',
        // justifyContent: 'center',
        borderWidth: .1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height:1},
        // shadowOpacity: 0.18,
        // shadowRadius: 1,
        // elevation:1,
      },

    imageContainer:{
      width: '40%',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'red'
    },

    image: {
      width: 120, 
      height: 80
    },

    contentContainer: {
    
      flexDirection: 'column',
      width: '60%',
      // backgroundColor: 'yellow'
    },

    neighborhood:{
      height: '50%',
      fontWeight: 'bold',
      // backgroundColor: 'green',
      fontSize: 18,
    },
    name:{
      height:'25%',
      // backgroundColor: 'brown',
      fontSize: 14,
    },
    title3:{
      height: '25%',
      // backgroundColor: 'orange',
      fontSize: 14,
    },

    description: {
      padding:10,
      textAlign: 'center',
      // backgroundColor:'blue',
      fontSize: 18,
      color: 'black'
    },
  });