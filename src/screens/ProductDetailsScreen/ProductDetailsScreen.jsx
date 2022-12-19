import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Product from './Component/Product';
import Colors from '../../theme/Colors';
import {CustomButton} from '../../components';

export default function ProductDetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={{padding: 30}}>
        <Product />
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.grayBold}>Product Name</Text>
        <Text numberOfLines={2} style={styles.descText}>
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </Text>
        <View style={styles.descWrapper}>
          <Text style={styles.grayBold}>Product Description</Text>
          <Text style={styles.descText}>
            Slim-fitting style, contrast raglan long sleeve, three-button henley
            placket, light weight & soft fabric for breathable and comfortable
            wearing. And Solid stitched shirts with round neck made for
            durability and a great fit for casual fashion wear and diehard
            baseball fans. The Henley style round neckline includes a
            three-button placket. Slim-fitting style, contrast raglan long
            sleeve, three-button henley placket, light weight & soft fabric for
            breathable and comfortable wearing. And Solid stitched shirts with
            round neck made for durability and a great fit for casual fashion
            wear and diehard baseball fans. The Henley style round neckline
            includes a three-button placket. Slim-fitting style, contrast raglan
            long sleeve, three-button henley placket, light weight & soft fabric
            for breathable and comfortable wearing.
          </Text>
        </View>
        <View style={styles.quantityWrapper}>
          <Text style={styles.grayBold}>Product Quantity</Text>
          <View style={styles.buttonsWrapper}>
            <CustomButton title="-" containerStyle={styles.btn1Container} />
            <Text>5</Text>
            <CustomButton title="+" containerStyle={styles.btn2Container} />
          </View>
        </View>
        <CustomButton title="Add to Cart" containerStyle={styles.btnWrapper} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.dark,
  },
  infoWrapper: {
    flex: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    paddingVertical: 30,
  },
  grayBold: {
    color: 'rgba(140, 143, 165, 1)',
    fontWeight: '700',
    marginBottom: 6,
    fontSize: 15,
  },
  descWrapper: {
    marginTop: 23,
  },
  descText: {
    fontSize: 15,
    color: 'rgba(140, 143, 165, 1)',
    fontWeight: '400',
  },
  quantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 140,
    backgroundColor: Colors.primary.light,
  },
  btn1Container: {
    paddingVertical: 7,
    paddingHorizontal: 14,
  },
  btn2Container: {
    paddingVertical: 5.5,
    paddingHorizontal: 12,
  },
  btnWrapper: {
    marginTop: 25,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});
