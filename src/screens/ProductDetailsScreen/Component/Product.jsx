import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ProductImage, Close, Star} from '../../../assests/Icons';
import {CustomButton} from '../../../components';
import Colors from '../../../theme/Colors';

export default function Product() {
  return (
    <View style={styles.productContainer}>
      <View style={styles.imageWrapper}>
        <ProductImage />
      </View>
      <View style={styles.productContentWrapper}>
        <View style={styles.descWrapper}>
          <Text style={styles.title}>Fjallraven - Foldsack...</Text>
          <View style={[styles.evaluationWrapper, {flexDirection: 'row'}]}>
            <Star />
            <Text style={[styles.title, {fontSize: 12}]}>3.9</Text>
          </View>
        </View>
        <Text style={styles.descText1}>Men's Clothing</Text>
        <Text style={styles.descText2}>100.95$</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  imageWrapper: {
    marginRight: 15,
    width: 65,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productContentWrapper: {
    width: '100%',
  },
  descWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '74%',
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  evaluationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 33,
  },
  descText1: {
    color: 'gray',
    marginTop: 5,
  },
  descText2: {
    fontSize: 13,
    color: 'black',
    fontWeight: '600',
    marginTop: 5,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 140,
    backgroundColor: Colors.primary.light,
  },
  btn1Container: {
    paddingVertical: 6,
    paddingHorizontal: 13,
  },
  btn2Container: {
    paddingVertical: 5.5,
    paddingHorizontal: 12,
  },
});
