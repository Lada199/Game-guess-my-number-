import { StyleSheet, Text } from "react-native"
import Colors from "../../constants/colors"

function InctructionText ({children, style}){
    return    <Text style={[styles.instactionText, style]}>{children}</Text>

}
export default InctructionText

const styles = StyleSheet.create({ 
    instactionText:{
        fontFamily:'open-sans',
    color: Colors.accent500,
    fontSize:24
}
}) 