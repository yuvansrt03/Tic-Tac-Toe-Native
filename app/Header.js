import { SafeAreaView, Text, Image,View } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView className="flex">
        <View className="flex justify-center items-center">
            <Image source={require('../assets/Logo.png')} style={styles.Logo}></Image>
        </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    Logo:{
        height:40,
        resizeMode:'contain',
        marginTop:20,
        alignSelf:'center'
    }
})
export default Header