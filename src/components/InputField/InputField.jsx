import {View, StyleSheet, TextInput, Text} from 'react-native';
import Colors from '../../theme/Colors';
import React from 'react';

export default function InputField({
  leftIcon,
  placeholder,
  title,
  keyboardType,
}) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.leftIcon}>{leftIcon}</View>
          <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            style={styles.text}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.gray.dark,
  },
  container: {
    backgroundColor: Colors.gray.bg,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 4,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: Colors.gray.light,
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 1,
    marginRight: 16,
  },
  leftIcon: {
    marginLeft: 14,
    marginRight: 15.2,
  },
});
