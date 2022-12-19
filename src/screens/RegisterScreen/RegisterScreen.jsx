import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../../theme/Colors';
import React from 'react';
import {InputField, PasswordField, CustomButton} from '../../components';
import {User, Message} from '../../assests/Icons';

const Title = () => {
  return (
    <View style={{marginTop: 100}}>
      <Text style={styles.text1}>Create Account</Text>
      <Text style={styles.text2}>Sign up to continue.</Text>
    </View>
  );
};

export default function RegisterScreen({navigation}) {
  const handleSignUp = () => {
    navigation.navigate('HomeStack');
  };

  const handleSignIn = () => {
    navigation.navigate('LoginScreen');
  };

  return (
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
          />
        </View>
        <View style={styles.mgTop_15}>
          <InputField
            leftIcon={<Message />}
            placeholder="example@gmail.com"
            title="Email"
            keyboardType={'email-address'}
          />
        </View>
        <View style={styles.mgTop_15}>
          <PasswordField title="Password" />
        </View>
        <View style={styles.mgTop_15}>
          <PasswordField title="Confirm Password" />
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton title="Sign Up" action={handleSignUp} />
        </View>
      </View>
      <View style={styles.noteWrapper}>
        <Text style={styles.text11}>Already have an account?</Text>
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.text22}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
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
});
