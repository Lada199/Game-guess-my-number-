import { Dimensions, StyleSheet, View } from "react-native"
import Colors from "../../constants/colors"

function Card({children}){
    return  <View style={styles.inputConteiner}>
        {children}

    </View>

}
export default Card
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
   
    inputConteiner: {
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 8,
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: .25
    },
})