import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Product from './Component/Product';
import Colors from '../../theme/Colors';
import {CustomButton, NavigationHeader} from '../../components';
import {Context} from '../../context/context';

export default function ProductDetailsScreen({navigation, route}) {
  const {product} = route.params;
  const [quantity, setQuantity] = React.useState(1);
  const {Cart, setCart, Total, setTotal} = React.useContext(Context);

  const handleQuantity = type => {
    if (type === 'add') {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const item = {
      ...product,
      quantity,
      totalPrice: product.price * quantity,
      id: Math.random().toString(),
    };
    setCart([...Cart, item]);
    setTotal(Total + item.totalPrice);
  };

  return (
    <>
      <NavigationHeader action={navigation.goBack} title={product.title} />
      <View style={styles.container}>
        <View style={{padding: 30}}>
          <Product item={product} />
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.grayBold}>Product Name</Text>
          <Text numberOfLines={2} style={styles.descText}>
            {product.title}
          </Text>
          <View style={styles.descWrapper}>
            <Text style={styles.grayBold}>Product Description</Text>
            <Text style={styles.descText}>{product.description}</Text>
          </View>
          <View style={styles.quantityWrapper}>
            <Text style={styles.grayBold}>Product Quantity</Text>
            <View style={styles.buttonsWrapper}>
              <CustomButton
                title="-"
                containerStyle={styles.btn1Container}
                action={() => handleQuantity('sub')}
              />
              <Text>{quantity}</Text>
              <CustomButton
                title="+"
                containerStyle={styles.btn2Container}
                action={() => handleQuantity('add')}
              />
            </View>
          </View>
          <CustomButton
            title="Add to Cart"
            containerStyle={styles.btnWrapper}
            action={handleAddToCart}
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
