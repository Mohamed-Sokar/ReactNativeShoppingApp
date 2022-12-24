import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Colors from '../../theme/Colors';
import React, {useRef} from 'react';
import {InputField, PasswordField, CustomButton} from '../../components';
import {User, Message} from '../../assests/Icons';
import {Formik} from 'formik';
import * as yup from 'yup';

const Title = () => {
  return (
    <View style={{marginTop: 100}}>
      <Text style={styles.text1}>Create Account</Text>
      <Text style={styles.text2}>Sign up to continue.</Text>
    </View>
  );
};

const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is Required')
    .min(3, ({min}) => `Username must be at least ${min} characters`),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter valid email')
    .min(10, ({min}) => `Email must be at least ${min} characters`),
  password: yup
    .string()
    .required('Password is required')
    .min(6, ({min}) => `Password must be at least ${min} characters`),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .min(6, ({min}) => `Confirm Password must be at least ${min} characters`)
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
});

export default function RegisterScreen({navigation}) {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const [loading, setLoading] = React.useState(false);

  const handleSignUp = (email, username, password) => {
    setLoading(true);
    fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        Alert.alert('Register Success', 'Enjoy your shopping');
        navigation.navigate('HomeStack');
      })
      .catch(err =>
        Alert.alert('Error', 'Something went wrong, please try again later'),
      )
      .finally(() => {
        setLoading(false);
      });
    // navigation.navigate('HomeStack');
  };

  const handleSignIn = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <Formik
      // validationSchema={loginValidationSchema}
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={values => {
        handleSignUp();
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Title />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.mgTop_15}>
              <InputField
                leftIcon={<User />}
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
            </View>
            <View style={styles.mgTop_15}>
              <InputField
                leftIcon={<Message />}
                placeholder="example@gmail.com"
                title="Email"
                keyboardType={'email-address'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                usernameRef={email}
              />
              {errors.email && touched.email && (
                <Text style={styles.errorMessage}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.mgTop_15}>
              <PasswordField
                title="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                usernameRef={password}
              />
              {errors.password && touched.password && (
                <Text style={styles.errorMessage}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.mgTop_15}>
              <PasswordField
                title="Confirm Password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                usernameRef={confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.errorMessage}>
                  {errors.confirmPassword}
                </Text>
              )}
            </View>
            <View style={styles.buttonWrapper}>
              {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : (
                <CustomButton title="Sign Up" action={handleSubmit} />
              )}
              {/* <CustomButton title="Sign Up" action={handleSignUp} /> */}
            </View>
          </View>
          <View style={styles.noteWrapper}>
            <Text style={styles.text11}>Already have an account?</Text>
            <TouchableOpacity onPress={handleSignIn}>
              <Text style={styles.text22}> Sign In</Text>
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
    marginTop: -20,
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
  mgTop_15: {
    marginTop: 15,
  },
  buttonWrapper: {
    marginTop: 26,
  },
  noteWrapper: {
    paddingTop: 70,
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
