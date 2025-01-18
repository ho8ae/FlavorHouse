import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import CustomButton from '../../components/CustomButton';
import {validateSignup} from '../../utils';
import {TextInput} from 'react-native-gesture-handler';
import useAuth from '../../hooks/queries/useAuth';

function SignupScreen() {
  // Ref는 특정 컴포넌트에 직접적으로 접근하기 위한 방법
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);
  const {signupMutation, loginMutation} = useAuth();
  const signup = useForm({
    initialValue: {email: '', password: '', passwordConfirm: ''},
    validate: validateSignup,
  });

  const handleSubmit = () => {
    const {email, password} = signup.values;
    signupMutation.mutate(
      {email, password},
      {
        onSuccess: () => loginMutation.mutate({email, password}),
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          // 화면이 열리면 자동으로 이 입력창에 포커스(커서)가 위치하게 됨
          autoFocus
          // 입력창에 아무것도 입력되지 않았을 때 보여줄 안내 텍스트
          placeholder="이메일"
          // useForm hook에서 관리하는 이메일 필드의 에러 메시지
          error={signup.errors.email}
          // 사용자가 이 필드를 한번이라도 터치했는지 여부를 추적
          touched={signup.touched.email}
          // 키보드 타입을 이메일 입력에 최적화된 형태로 보여줌 (@ 기호가 쉽게 입력 가능)
          inputMode="email"
          // 키보드의 return 키를 '다음'으로 변경 (다음 입력창으로 이동할 것임을 암시)
          returnKeyType="next"
          // submit(return/다음) 키를 눌렀을 때 키보드가 사라지지 않도록 설정
          blurOnSubmit={false}
          // return(다음) 키를 눌렀을 때 passwordRef가 가리키는 다음 입력창(비밀번호)으로 포커스 이동
          onSubmitEditing={() => passwordRef.current?.focus()}
          // useForm hook에서 제공하는 이메일 필드 관련 props들을 모두 spread
          // value, onChangeText, onBlur 등이 포함되어 있음
          {...signup.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          textContentType="oneTimeCode"
          error={signup.errors.password}
          touched={signup.touched.password}
          secureTextEntry
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => {
            passwordConfirmRef.current?.focus();
          }}
          {...signup.getTextInputProps('password')}
        />
        <InputField
          ref={passwordConfirmRef}
          placeholder="비밀번호 확인"
          error={signup.errors.passwordConfirm}
          touched={signup.touched.passwordConfirm}
          secureTextEntry
          onSubmitEditing={handleSubmit}
          {...signup.getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomButton label="회원가입" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default SignupScreen;
