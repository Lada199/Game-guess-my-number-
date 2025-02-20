import {
    TextInput,
    View,
    StyleSheet
} from "react-native"
import PrimaryButton from "../components/PrimaryButton"

function StartGAmeScreen() {
    return <View style={styles.inputConteiner}>
        <TextInput
         style={styles.numberInput}
          maxLength={2}
          autoCapitalize="none"
          autoComplete={false}
           keyboardType="number-pad"/>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>

    </View>
}
export default StartGAmeScreen

const styles = StyleSheet.create({
    inputConteiner: {
        marginHorizontal: 24,
        borderRadius:8,
        padding: 16,
        marginTop: 100,
        backgroundColor: '#72063c',
        elevation: 4,
        shadowColor:'black',
        shadowOffset:{width: 0, height:2},
        shadowRadius: 6,
        shadowOpacity:.25
    },
    numberInput:{
        height:50,
        width:50,
        textAlign:'center',
        fontSize:32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth:2,
        color: '#ddb52f',
        marginVertical:8,
        fontWeight: 'bold'

    }
})
