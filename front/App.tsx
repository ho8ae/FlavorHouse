import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AuthHomeScreen from './src/screens/AuthHomeScreen';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';

function App() {
  const [name, setName] = useState('');

  // e로 안 받고 바로 text로 받을 수 있음
  const handleChangeInput = (text: string) => {
    console.log(text);
    setName(text);
  };

  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  //css는 웹가 다르게 카멜케이스로 되어있음
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    height: 100,
    width: 100,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
