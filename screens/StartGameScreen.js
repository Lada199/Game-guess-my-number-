import {
    TextInput,
    View,
    Text,
    StyleSheet,
    Alert
} from "react-native"
import { useState } from "react"
import PrimaryButton from "../components/ui/PrimaryButton"
import Colors from "../constants/colors"
import Title from "../components/ui/Title"
import Card from "../components/ui/Card"
import InctructionText from "../components/ui/InstructionText"

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



    return <View style={styles.rootContainer}>
        <Title>Guess my Number</Title>

    <Card>
        <InctructionText>Enter a number</InctructionText>
     
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

    </Card>
    </View>
}
export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:'center'
    },
   
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold'

    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer:{
        flex:1
    },
   
})
