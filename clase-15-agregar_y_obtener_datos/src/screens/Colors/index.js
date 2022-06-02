import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View style={styles.container}>
        <View style={styles.subContainer1}>
            <Text>Color 1</Text>
        </View>
        <View style={styles.subContainer2}>
            <Text>Color 2</Text>
        </View>
        <View style={styles.subContainer3}>
            <Text>Color 2</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }, 
    subContainer1:{
        backgroundColor:'red',
        flex:1
    },
    subContainer2:{
        backgroundColor:'blue',
        flex:2
    },
    subContainer3:{
        backgroundColor:'green',
        flex:3
    },
})