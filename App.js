import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOver';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }
  function startNewGameHandler() {
    setUserNumber(null)
    setGameIsOver(true)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }
  if (gameIsOver && userNumber) {

    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStarttNewGame={startNewGameHandler} />
  }





  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScteen}>
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
