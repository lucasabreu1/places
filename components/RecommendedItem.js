import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import LineSeparator from './LineSeparator';

const {width, height} = Dimensions.get("window")
const RecommendedItem = ({data}) => {
    return (
        <View style={styles.placeContainer}>
            <Image style={styles.image} source={ImagesAssets[data.imageName]}></Image>
            <Text style={styles.placeTitle}>{data.title}</Text>
            <LineSeparator marginTop={30} marginBottom={30}></LineSeparator>
        </View>
    )
}

export default RecommendedItem

const styles = StyleSheet.create({

    placeContainer: {
        width: width,
        height: 250,
        // marginBottom: 20,
        // borderWidth: 1,
        // borderRadius: 5,
        // borderColor: '#ddd',
      },

      image: {
        flex:1,
        width: null, 
        height: null,
        resizeMode: 'cover'
      },

      placeTitle: {
        fontSize:20,
        fontWeight: "bold",
        justifyContent: 'center',
        color: "#000000"
      },
})