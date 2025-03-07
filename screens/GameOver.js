import { Image, StyleSheet, Text, View, ScrollView, Dimensions, useWindowDimensions } from "react-native"
import Title from "../components/ui/Title"
import Colors from '../constants/colors'
import PrimaryButton from "../components/ui/PrimaryButton"

function GameOverScreen({ roundsNumber, userNumber, onStarttNewGame }) {
    const {width, height} = useWindowDimensions()

    let imageSize = 300;

    if(width < 380){
        imageSize = 150;
    }
    if(height < 500){
        imageSize = 80
    }

    const imageStyle = {
        width:imageSize,
        height:imageSize,
        borderRadius: imageSize / 2
    }

    return <ScrollView style={styles.screen}>
<View style={styles.rootContainer}>
        <Title>
            GAME OVER!
        </Title>
        <View style={[styles.imageContainer, imageStyle]}>

            <Image source={require('../assets/success.png')} style={styles.image} />
        </View>
        <Text style={styles.summaryText} >Your ghone neede <Text style={styles.highlight} >{roundsNumber} </Text> round to guess the number <Text style={styles.highlight}>{userNumber}</Text> </Text>
        <PrimaryButton onPress={onStarttNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView> 
    

}
export default GameOverScreen

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    screen:{
        flex:1,
          
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
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