import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Vector} from '../../assests/Icons';
import Colors from '../../theme/Colors';
import {CustomButton} from '../../components';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.vector}>
        <Vector />
      </View>
      <Text style={styles.name}>Mohammad Salem Sokar</Text>
      <Text style={styles.email}>example@gmail.com</Text>
      <View style={styles.ButtonWrapper}>
        <CustomButton
          title="Log out"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
        />
      </View>
    </View>
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
