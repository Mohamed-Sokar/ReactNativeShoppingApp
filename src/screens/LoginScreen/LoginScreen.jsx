import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../theme/Colors';
import React from 'react';
import {InputField, PasswordField, CustomButton} from '../../components';
import {User} from '../../assests/Icons';

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

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Title />
      </View>
      <View style={styles.formContainer}>
        <InputField
          leftIcon={<User />}
          placeholder="mohamed sokar"
          title="Username"
          keyboardType={'default'}
        />
        <View style={styles.PasswordWrapper}>
          <PasswordField title="Password" />
        </View>
        <View style={styles.buttonWrapper}>
          <CustomButton title="Sign In" />
        </View>
      </View>
      <View style={styles.noteWrapper}>
        <Text style={styles.text11}>Don’t have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.text22}> Sign Up</Text>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  formContainer: {
    flex: 0.5,
  },
  title: {},
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
});
