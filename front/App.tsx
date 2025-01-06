import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App() {
  const [name, setName] = useState('');

  // e로 안 받고 바로 text로 받을 수 있음
  const handleChangeInput = (text: string) => {
    console.log(text);
    setName(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 노치 영역을 침범하지 않기 위해 SafeArea 사용 함 */}
      <View style={styles.inputContainer}>
        <Text>이름</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={handleChangeInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Text>텍스트</Text>
      </View>
    </SafeAreaView>
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
