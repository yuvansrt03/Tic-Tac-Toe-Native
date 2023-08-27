import { ScrollView, StyleSheet, Text, View, SafeAreaView, ImageBackground, Image } from "react-native";
import '../global.css'
import Header from "./Header";
import Game from "./Game";
import Info from "./Info";
import Result from "./Result";
import { useState } from "react";
export default function Page() {
  const [playerturn,setPlayerTurn]=useState('Player1')
  const [player1Score,setPlayer1Score]=useState(0)
  const [player2Score,setPlayer2Score]=useState(0)
  const [gameOver,setGameOver]=useState(false)
  const handleGameOver=(val)=>{
    setGameOver(val)
  }
  const incrementPlayer1Score=()=>{
    setPlayer1Score(score=>score+=1)
  }
  const incrementPlayer2Score=()=>{
    setPlayer2Score(score=>score+=1)
  }
  const handlePlayerChange=(player)=>{
    setPlayerTurn(player)
  }
  return (
    <SafeAreaView style={styles.ColorBackground} >
        <Header/>
        <Info player1Score={player1Score} player2Score={player2Score} playerturn={playerturn}/>
        {gameOver?<Result playerturn={playerturn}/>:<></>}
        <Game incrementPlayer1Score={incrementPlayer1Score} incrementPlayer2Score={incrementPlayer2Score} handlePlayerChange={handlePlayerChange} playerturn={playerturn} handleGameOver={handleGameOver}/>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  ColorBackground:{
    flex:1,
    backgroundColor:"#010010"
  }
})