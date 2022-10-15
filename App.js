import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import SignIn from './src/screens/auth/SignIn';

const WEB_CLIENT_ID = '596692142738-tembe53muj6b7t3msm1fd2fg72josg27.apps.googleusercontent.com';
const IOS_CLIENT_ID = '596692142738-951n8ht9ifeahbqejmj8t4okn695uljq.apps.googleusercontent.com';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  return (
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  );
};

export default App;
