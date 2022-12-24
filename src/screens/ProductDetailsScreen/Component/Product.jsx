import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ProductImage, Close, Star} from '../../../assests/Icons';
import {CustomButton} from '../../../components';
import Colors from '../../../theme/Colors';

export default function Product({item}) {
  return (
    <View style={styles.productContainer}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: item.image}} style={{width: 65, height: 100}} />
      </View>
      <View style={styles.productContentWrapper}>
        <View style={styles.descWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
          <View style={[styles.evaluationWrapper, {flexDirection: 'row'}]}>
            <Star />
            <Text style={[{fontSize: 12, fontWeight: '700', color: 'black'}]}>
              {item.rating.rate}
            </Text>
          </View>
        </View>
        <Text style={styles.descText1}>{item.category}</Text>
        <Text style={styles.descText2}>{item.price}</Text>
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
    width: 200,
    // backgroundColor: 'red',
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
