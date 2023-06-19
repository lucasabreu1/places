import React, { useEffect, useState } from 'react';
import {View, TextInput, StyleSheet, Alert, FlatList, Text, Image} from 'react-native';

const LineSeparator = ({marginTop = 20, marginBottom = 20}) => {
    return (
        <View style={{
            ...styles.separator, 
            marginTop: marginTop,
            marginBottom: marginBottom
            }}>
            <Text>oiee</Text>
        </View>
    )
  };

  export default LineSeparator

  const styles = StyleSheet.create({

    separator: {
        height: 1,
        backgroundColor: "gray",
    }
  });