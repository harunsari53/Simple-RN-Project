import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils/colors'

const styles = StyleSheet.create({
    container:{
        marginBottom: 20,

    },
    label:{
        marginVertical: 8,
        color: colors.orange,
        fontWeight: '900'
    },
    inputContainer:{
        borderWidth: 2,
        borderColor: colors.gray,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input:{
        //borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex:1
        //borderColor: colors.gray
    },
    eye:{
        width:28,
        height:28,
        marginHorizontal:16,

    }

})

export default styles