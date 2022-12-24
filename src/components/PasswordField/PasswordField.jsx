import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../theme/Colors';
import React from 'react';
import {Lock} from '../../assests/Icons';
import Icon from 'react-native-vector-icons/AntDesign';

export default function PasswordField({
  title,
  onChangeText,
  onBlur,
  value,
  error,
  passwordRef,
}) {
  const [visible, setVisible] = React.useState(true);
  const toggleVisibelity = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.leftIcon}>
            <Lock />
          </View>
          <TextInput
            placeholder="********"
            keyboardType="default"
            style={styles.input}
            secureTextEntry={visible}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            error={error}
            ref={passwordRef}
          />
        </View>
        <TouchableOpacity onPress={toggleVisibelity} style={styles.rightIcon}>
          {visible ? (
            <Icon name="eyeo" size={22} color={Colors.gray.light} />
          ) : (
            <Icon name="eye" size={22} color={Colors.gray.light} />
          )}
        </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 4,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    color: Colors.gray.light,
    flex: 0.86,
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 1,
  },
  leftIcon: {
    marginLeft: 14,
    marginRight: 15.2,
    marginBottom: 5,
  },
  rightIcon: {
    marginRight: 20,
  },
});
