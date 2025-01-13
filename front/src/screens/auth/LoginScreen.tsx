import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';
import {validateLogin} from '../../utils';

function LoginScreen() {
  // 초보 버전

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChangeEmail = (text: string) => {
  //   setEmail(text);
  // };
  // const handleChangePassword = (text: string) => {
  //   setPassword(text);
  // };

  // const [values, setValues] = useState({
  //   email: '',
  //   password: '',
  // });

  // const [touched, setTouched] = useState({
  //   email: false,
  //   password: false,
  // });

  // const handleChangeText = (name: string, text: string) => {
  //   setValues({
  //     ...values,
  //     [name]: text,
  //   });
  // };

  // const handleBlur = (name: string) => {
  //   setTouched({
  //     ...touched,
  //     [name]: true,
  //   });
  // };

  const login = useForm({
    initialValue: {email: '', password: ''},
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log('values', login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inpurConintaer}>
        <InputField
          placeholder="이메일"
          error={login.errors.email}
          touched={login.touched.email}
          inputMode="email"
          {...login.getTextInputProps('email')}
        />
        <InputField
          placeholder="비밀번호"
          error={login.errors.password}
          touched={login.touched.password}
          secureTextEntry
          {...login.getTextInputProps('password')}
        />
      </View>
      <CustomButton
        label="로그인"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inpurConintaer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default LoginScreen;
