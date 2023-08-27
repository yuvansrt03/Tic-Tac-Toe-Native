import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Result = ({playerturn}) => {
  return (
    <View style={styles.basic}>
      <Text style={styles.text}>{playerturn.toUpperCase()} Wins 🏆</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    basic:{
        flex:1,
        transform:[{translateY:-20}],
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontSize:18,
    }
})
export default Result