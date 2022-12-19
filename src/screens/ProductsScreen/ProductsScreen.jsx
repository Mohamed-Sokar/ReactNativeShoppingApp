import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {ProductImage, Star} from '../../assests/Icons';
import {CustomButton} from '../../components';
import Colors from '../../theme/Colors';

export default function ProductsScreen() {
  const Product = () => {
    return (
      <View style={styles.productContainer}>
        <ProductImage />
        <Text style={styles.title}>Fjallraven - Fold...</Text>
        <Text style={styles.desc}>Men's Clothing</Text>
        <View style={styles.priceAnEevaluationWrapper}>
          <Text style={styles.price}>109.95$</Text>
          <View style={styles.star}>
            <Star />
          </View>
          <Text style={styles.evaluation}>3.9</Text>
        </View>
        <CustomButton
          title="Buy Now"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Product /> */}
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        renderItem={({item}) => <Product number={item} />}
        keyExtractor={item => item}
        numColumns={2}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.light,
  },
  productContainer: {
    width: 160,
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.common.white,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 15,
    color: Colors.common.black,
    fontWeight: '700',
    marginTop: 4,
  },
  desc: {
    fontSize: 12,
    color: Colors.gray.light,
    fontWeight: '500',
    marginTop: 3,
  },
  priceAnEevaluationWrapper: {
    flexDirection: 'row',
    marginTop: 7,
    width: '70%',
    justifyContent: 'space-between',
  },
  star: {
    marginRight: -10,
    marginTop: 2,
  },
  price: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.gray.dark,
  },
  evaluation: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.gray.dark,
  },
  buttonContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 5,
  },
  buttonTitle: {
    fontSize: 12,
    fontWeight: '600',
  },
  flatList: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    // backgroundColor: 'red',
  },
});
