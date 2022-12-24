import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Colors from '../../theme/Colors';
import React, {useRef} from 'react';
import {InputField, PasswordField, CustomButton} from '../../components';
import {UserIcon} from '../../assests/Icons';
import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Context} from '../../context/context';

const Title = () => {
  return (
    <View
      style={{
        marginTop: 100,
      }}>
      <Text style={styles.text1}>Welcome Back!</Text>
      <Text style={styles.text2}>Sign in to continue.</Text>
    </View>
  );
};

export default function LoginScreen({navigation}) {
  const [loading, setLoading] = React.useState(false);
  const {setUser, User} = React.useContext(Context);

  const handleLogin = (username, password) => {
    setLoading(true);
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        // password: password,
        // username: 'johnd',
        password: 'm38rmF$',
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        AsyncStorage.setItem('username', username);
        AsyncStorage.setItem('token', json.token).then(() => {
          Alert.alert('Login Success');
          navigation.navigate('HomeStack');
        });
      })
      .catch(err =>
        Alert.alert(
          'Error',
          'username or password is incorrect !! plesae try again',
        ),
      )
      .finally(() => {
        setLoading(false);
      });
  };
  const handleSignUp = () => {
    navigation.navigate('RegisterScreen');
  };

  const loginValidationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is Required')
      .min(3, ({min}) => `Username must be at least ${min} characters`),

    password: yup
      .string()
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const username = useRef();
  const password = useRef();

  return (
    <Formik
      // validationSchema={loginValidationSchema}
      initialValues={{username: '', password: ''}}
      onSubmit={values => {
        handleLogin(values.username, values.password);
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Title />
          </View>
          <View style={styles.formContainer}>
            <InputField
              leftIcon={<UserIcon />}
              placeholder="mohamed sokar"
              title="Username"
              keyboardType={'default'}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              usernameRef={username}
            />
            {errors.username && touched.username && (
              <Text style={styles.errorMessage}>{errors.username}</Text>
            )}
            <View style={styles.PasswordWrapper}>
              <PasswordField
                title="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                passwordRef={password}
              />
              {errors.password && touched.password && (
                <Text style={styles.errorMessage}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.buttonWrapper}>
              <CustomButton
                title="Sign In"
                action={handleSubmit}
                loading={loading}
              />
            </View>
          </View>
          <View style={styles.noteWrapper}>
            <Text style={styles.text11}>Don’t have an account?</Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.text22}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  titleWrapper: {
    flex: 0.3,
  },
  formContainer: {
    flex: 0.5,
  },
  text1: {
    color: Colors.primary.dark,
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
  },
  text2: {
    color: Colors.gray.dark,
    fontWeight: '600',
    fontSize: 20,
    marginTop: 18,
    textAlign: 'center',
  },
  PasswordWrapper: {
    marginTop: 15,
  },
  buttonWrapper: {
    marginTop: 26,
  },
  noteWrapper: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text11: {
    color: Colors.gray.light,
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center',
  },
  text22: {
    color: Colors.primary.dark,
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 12,
    fontWeight: '500',
    color: 'red',
    marginLeft: 10,
    marginTop: 3,
  },
});
