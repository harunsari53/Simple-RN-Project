import React, { useState } from 'react';
import {Text, View, ScrollView} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {styles} from './style';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';


const SignIn = () => {
  const onSignUp = () => {
    console.log('Sign Up oldu mu')
  }
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title={'SignIn'}/>
      <Input label= "E-mail" placeholder='Eg: example@gmail.com'/>
      <Input isPassword label= "Password" placeholder='*********'/>
      <Button style={styles.button} title='Sign In' />
      <Seperator text="Or Sign In with" />
      <GoogleLogin />
      <Text style={styles.footerText}> Don't have an account?
        <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>
      </Text>
    </ScrollView>
  );
};
export default React.memo(SignIn);
