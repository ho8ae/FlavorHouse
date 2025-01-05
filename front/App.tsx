import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      {/* 노치 영역을 침범하지 않기 위해 SafeArea 사용 함 */}
      <View style={styles.container}>
        {/* 이렇게 View를 또 감싸면 텍스트가 노치를 침버맣지 않음 */}
        <Text>텍스트</Text>
        <Button title="버튼이름" onPress={() => console.log('클릭됨!')} />
        <TextInput />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //css는 웹가 다르게 카멜케이스로 되어있음
  container: {
    backgroundColor: 'red',
    margin: '10%',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default App;
