import {
    TextInput,
    View,
    StyleSheet,
    Alert
} from "react-native"
import { useState } from "react"
import PrimaryButton from "../components/PrimaryButton"

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler (enteredText){
        setEnteredNumber(enteredText)

    }
    function resetInputHandler () {
        setEnteredNumber('')
    }
    function confirmInputHandler (){
      const chosenNumber = parseInt(enteredNumber);

      if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){ 
        Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99', [{text: 'Okay', style:'destructive', onPress: resetInputHandler}] )
        return;
      }
      onPickNumber(chosenNumber)
    }



    return <View style={styles.inputConteiner}>
        <TextInput
            style={styles.numberInput}
            maxLength={2}
            autoCapitalize="none"
            autoComplete={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
            keyboardType="number-pad"
             />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer} >
                <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer} >
                <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
            </View>

        </View>

    </View>
}
export default StartGameScreen

const styles = StyleSheet.create({
    inputConteiner: {
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 8,
        padding: 16,
        marginTop: 100,
        backgroundColor: '#3b021f',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: .25
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold'

    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer:{
        flex:1
    }
})
