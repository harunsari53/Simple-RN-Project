import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { styles } from './style' 

const Checkbox = ({ checked, onCheck }) => {
    
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={() => onCheck(!checked)} style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image style={styles.checkIcon} source={require('../../assets/checked.png')} />
        </View>
      ) : null}

    </TouchableOpacity>
  )
}

export default React.memo(Checkbox);

