import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../theme/Colors';
import {Cart} from '../../assests/Icons';
import {CustomButton} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({navigation}) {
  const [token, setToken] = React.useState(true);

  const handleGetStarted = () => {
    navigation.navigate('LoginScreen');
  };

  React.useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        setToken(true);
        navigation.navigate('HomeStack');
      } else {
        setToken(false);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Cart />
        <Text style={styles.title}>Shopping App</Text>
      </View>
      {token ? null : (
        <CustomButton
          title="Get started"
          containerStyle={styles.button}
          titleStyle={styles.buttonTitle}
          action={handleGetStarted}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.dark,
  },
  wrapper: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.common.white,
    fontSize: 37,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.common.white,
    width: 181,
    height: 40,
    paddingVertical: 7,
    alignSelf: 'center',
  },
  buttonTitle: {
    color: Colors.primary.dark,
  },
});
