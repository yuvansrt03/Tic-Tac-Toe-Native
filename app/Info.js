import { View, Text, StyleSheet ,Image} from 'react-native'
import React from 'react'

const Info = ({playerturn,player1Score,player2Score}) => {
  return (
    <View style={styles.container}>
        <View style={[styles.player1,playerturn==='Player1'?styles.borderActive:styles.none]}>
            <Image source={require('../assets/player1.jpeg')} style={[styles.player1Img]}></Image>
            <Text style={styles.playerWeaponX}>X</Text>
            <Text style={styles.playerScore}>{player1Score}</Text>
        </View>
        <View style={[styles.player2,playerturn==='Player2'?styles.borderActive:styles.none]}>
            <Image source={require('../assets/player2.jpg')} style={styles.player2Img}></Image>
            <Text style={styles.playerWeaponO}>O</Text>
            <Text style={styles.playerScore}>{player2Score}</Text>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    borderActive:{
        borderWidth:2,
        borderColor:'#6EC531',
    },
    playerWeaponX:{
        color:'red',
        fontSize:30,
        fontFamily:'Roboto'
    },
    playerWeaponO:{
        color:'#388EFF',
        fontSize:30,
        fontFamily:'Roboto'
    },
    playerScore:{
        color:'white',
        fontSize:20,
        marginBottom:15
    },
    container:{
        flex:4,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    white:{
        color:'white'
    },
    player1:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        height:170,
        backgroundColor:'#222239',
        width:70,
        marginRight:30,
        borderWidth:1,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    },
    player1Img:{
        width:65,
        height:65,
        objectFit:'cover', 
        borderRadius:50,
        borderWidth:2,
        borderColor:'red',
    },
    player2:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        height:170,
        backgroundColor:'#222239',
        width:70,
        marginLeft:30,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    },
    player2Img:{
        width:65,
        height:65,
        objectFit:'cover', 
        borderRadius:50,
        borderWidth:2,
        borderColor:'#87CEEB',
    }
})
export default Info