import {TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Retry = ({handleOnRetry}) => {
  return (
    <TouchableOpacity style={styles.RetryButton} onPress={handleOnRetry}>
        <Text className="text-white">Retry</Text>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    RetryButton:{
        width:'100%',
        backgroundColor:"#9C5DC5",
        height:50,
        justifyContent:'center',
        alignItems:'center',
      },
})
export default Retry