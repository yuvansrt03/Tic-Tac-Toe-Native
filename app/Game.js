import { View, Text, Image, StyleSheet,SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Info from './Info'
import Retry from './Retry'

const Game = ({handleGameOver,handlePlayerChange,incrementPlayer2Score,incrementPlayer1Score,playerturn}) => {
  const [noOfMatches,setNoOfMatches]=useState(1)
  const [isOver,setIsOver]=useState(false)
  const [turn,setTurn]=useState('Player1')
  const [isSet,setIsSet]=useState(Array(9).fill(false))
  const [xplay,setXplay]=useState([])
  const [yplay,setYplay]=useState([])
  const WINNING_POS=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  const checkwinning = (items)=>{
    for(let i=0;i<WINNING_POS.length;i++){
      const result=WINNING_POS[i].every(val=>items.includes(val))
      if(result===true)return true
    }
    return false
  }
  const handleOnRetry = ()=>{
    setXplay([])
    setYplay([])
    const updatedIsSet=Array(9).fill(false);
    setIsSet(updatedIsSet)
    setIsOver(false)
    handleGameOver(false)
    setNoOfMatches(count=>count+=1);
    if(noOfMatches%2===0){
      handlePlayerChange('Player1')
      setTurn('Player1')
    }
    else{
      handlePlayerChange('Player2')
      setTurn('Player2')
    }
  }
  const handlePlayerClick =(item)=>{
    const updatedArray=[...isSet]
    if(!isSet[item] && !isOver){
      updatedArray[item]=true
      setIsSet(updatedArray);
      if(turn==='Player1'){
        xplay.push(item)
        if(checkwinning(xplay)==true){
          console.log('Player1 Wins')
          setIsOver(val=>!val)
          incrementPlayer1Score(1)
          handleGameOver(true)
        }
        else{
          setTurn('Player2')
          handlePlayerChange('Player2')
        }
      }
      else{
        yplay.push(item)
        if(checkwinning(yplay)==true){
          console.log('Player2 Wins')
          setIsOver(val=>!val)
          incrementPlayer2Score(1)
          handleGameOver(true)
        }
        else{
          setTurn('Player1')
          handlePlayerChange('Player1')
        }
      }
    }
    const allEqual = arr => arr.every(val => val === arr[0]);
    const isEqual = allEqual(updatedArray)
    if(isEqual==true){
      handlePlayerChange('NoOne')
      setIsOver(true)
      handleGameOver(true)
    }
  }

  return (
    <View className="flex justify-center items-center">
      <View style={styles.gameContainer}>
        <Image style={styles.gameGridImg} source={require('../assets/grid.png')}></Image>
        <FlatList
        data={[0,1,2,3,4,5,6,7,8]}
        style={styles.gameGrid}
        scrollEnabled={false}
        renderItem={({item})=>
        <TouchableOpacity key={item} style={styles.eachGrid} onPress={()=>handlePlayerClick(item)}>
            {isSet[item]?
            <>
              {
                xplay.includes(item)?
                <Image source={require('../assets/gameX.png')} style={styles.gamePoint}></Image>
                :
                <></>
              }
              {
                yplay.includes(item)?
                <Image source={require('../assets/gameO.png')} style={styles.gamePoint}></Image>
                :
                <></>
              }
            </>
            :
            <></>
            }
          </TouchableOpacity>}
          numColumns={3}
          />
      </View>
      <Retry handleOnRetry={handleOnRetry}></Retry>
    </View>
  )
}
const styles=StyleSheet.create({ 
  gameContainer:{
    position:'relative',
    height:310
  },
  gamePoint:{
    height:80,
    width:80,
    resizeMode:'contain',
    alignSelf:'center',    
  },
  gameGridImg:{
    position:'absolute',
    bottom:0, 
    alignSelf:'center',
    height:330,
    resizeMode:'contain',
  },
  gameGrid:{
    rowGap:2,
    columnGap:1.8,
    alignSelf:'center',
    transform:[{translateX:-2}]
  },
  eachGrid:{
    height:81,
    transform:[{scaleY:1.065},{scaleX:1.05}],
    width:83,
    margin:8,
  }
})
export default Game