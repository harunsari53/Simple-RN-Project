import React, { useState } from 'react';
import {Text, View, ScrollView} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {styles} from './style';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';


const SignUp = () => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {
    console.log('Sign In oldu mu')
  }
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title={'SignUp'}/>
      <Input label= "Name" placeholder='Eg: Harun Sarı'/>
      <Input label= "E-mail" placeholder='Eg: example@gmail.com'/>
      <Input isPassword label= "Password" placeholder='*********'/>
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked}/>
        <Text style={styles.agreeText}> I agree with <Text style={styles.agreeTextBold}> Terms </Text> & <Text style={styles.agreeTextBold}> Privacy </Text> </Text> 
      </View>
      <Button style={styles.button} title='Sign Up' />
      <Seperator text="Or Sign Up with" />
      <GoogleLogin />
      <Text style={styles.footerText}> Already have an account?
        <Text onPress={onSignIn} style={styles.footerLink}>Sign In</Text>
      </Text>
    </ScrollView>
  );
};
export default React.memo(SignUp);
