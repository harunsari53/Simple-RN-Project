import React from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import Button from '../../../components/Button';
import {styles} from './style';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assets/splash_image.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need </Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <Button title="Sign In" />

      <Pressable>
        <Text style={styles.footerText}> No Account? Sign Up </Text>
      </Pressable>
    </View>
  );
};
export default React.memo(Splash);
