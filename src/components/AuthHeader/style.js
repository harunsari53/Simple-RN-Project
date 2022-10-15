import { StyleSheet } from 'react-native'
import {colors} from "../../utils/colors"

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
    },
    image:{
        width: 50,
        height: 50
    },
    title:{
        color: colors.blue,
        fontWeight: 'bold',
        fontSize: 26,
        paddingHorizontal: 16
    }

});