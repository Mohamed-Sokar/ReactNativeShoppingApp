import {View, Text, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import React from 'react';
import {Vector} from '../../assests/Icons';
import Colors from '../../theme/Colors';
import {CustomButton, NavigationHeader} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

export default function ProfileScreen({navigation}) {
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState(null);

  const fetshAllUsers = () => {
    fetch(`https://fakestoreapi.com/users`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        setUsers(json);
      })
      .catch(err =>
        Alert.alert(err, 'something went wrong, please try again later'),
      );
  };

  React.useEffect(() => {
    fetshAllUsers();
  }, []);

  React.useEffect(() => {
    AsyncStorage.getItem('username').then(res => {
      const item = _.find(users, item => item.username === res);
      setUser(item);
    });
  }, [users]);

  const handleLogOut = () => {
    AsyncStorage.removeItem('token').then(() => {
      navigation.navigate('LoginScreen');
    });
  };

  return (
    <>
      <NavigationHeader action={navigation.goBack} title="Profile" />
      <View style={styles.container}>
        <View style={styles.vector}>
          <Vector />
        </View>
        {user ? (
          <>
            <Text style={styles.name}>{user.username}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </>
        ) : (
          <View style={{marginTop: 50}}>
            <ActivityIndicator size="large" color={Colors.common.white} />
          </View>
        )}
        <View style={styles.ButtonWrapper}>
          <CustomButton
            title="Log out"
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            action={handleLogOut}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.dark,
    alignItems: 'center',
  },
  vector: {
    marginTop: 100,
  },
  name: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.common.white,
    marginTop: 40,
  },
  email: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.common.white,
    marginTop: 15,
  },
  ButtonWrapper: {
    marginTop: 135,
  },
  buttonContainer: {
    backgroundColor: Colors.common.white,
    paddingHorizontal: 53,
    paddingVertical: 9,
  },
  buttonTitle: {
    color: Colors.primary.dark,
  },
});
