import { Image, StyleSheet, Text, View } from "react-native"
import Title from "../components/ui/Title"
import Colors from '../constants/colors'
import PrimaryButton from "../components/ui/PrimaryButton"

function GameOverScreen({ roundsNumber, userNumber, onStarttNewGame }) {

    return <View style={styles.rootContainer}>
        <Title>
            GAME OVER!
        </Title>
        <View style={styles.imageContainer}>

            <Image source={require('../assets/success.png')} style={styles.image} />
        </View>
        <Text style={styles.summaryText} >Your ghone neede <Text style={styles.highlight} >{roundsNumber} </Text> round to guess the number <Text style={styles.highlight}>{userNumber}</Text> </Text>
        <PrimaryButton onPress={onStarttNewGame}>Start New Game</PrimaryButton>
    </View>

}
export default GameOverScreen
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
})