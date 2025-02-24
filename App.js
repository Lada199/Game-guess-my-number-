import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOver';


export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(){
    setGameIsOver(true)
  }

  let screen =  <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if(gameIsOver && userNumber){
    screen = <GameOverScreen />
  }

 



  return (
    <LinearGradient colors={[ Colors.primary700, Colors.accent500]} style={styles.rootScteen}>
      <ImageBackground source={require('./assets/background.png')} resizeMode='cover'
        style={styles.rootScteen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScteen} >
       {screen}

        </SafeAreaView>
     
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScteen: {
    flex: 1
  },
  backgroundImage: {
    opacity: .15
  }





});
