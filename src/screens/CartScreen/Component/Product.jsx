import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import {ProductImage, Close} from '../../../assests/Icons';
import {CustomButton} from '../../../components';
import Colors from '../../../theme/Colors';
import {Context} from '../../../context/context';

export default function Product({item}) {
  const {Cart, setCart, Total, setTotal} = React.useContext(Context);
  const [quantity, setQuantity] = React.useState(item.quantity);

  const handleMinus = () => {
    quantity > 1 && setQuantity(quantity - 1);
    item.quantity = quantity;
    quantity > 1 && setTotal(Total - item.price);
  };
  const handleAdd = () => {
    setQuantity(quantity + 1);
    item.quantity = quantity;
    setTotal(Total + item.price);
  };

  const handleRemove = item => {
    Alert.alert(
      'Romoved successfully',
      'The item removed from cart successfully ...',
    );
    setCart(Cart.filter(i => i.id !== item.id));
    setTotal(Total - item.price * item.quantity);
  };

  return (
    <View style={styles.productContainer}>
      <View style={styles.imageWrapper}>
        <Image
          source={{uri: item.image}}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={styles.productContentWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <View style={styles.descWrapper}>
          <Text style={styles.descText1}>{item.category}</Text>
          <Text style={styles.descText2}>{item.price} $</Text>
        </View>

        <View style={styles.buttonsWrapper}>
          <CustomButton
            title="-"
            containerStyle={styles.btn1Container}
            action={() => {
              handleMinus();
            }}
          />
          <Text>{quantity}</Text>
          <CustomButton
            title="+"
            containerStyle={styles.btn2Container}
            action={() => {
              handleAdd();
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.closeIcon}
        onPress={() => {
          handleRemove(item);
        }}>
        <Close />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productContainer: {
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 20,
  },
  imageWrapper: {
    marginRight: 15,
    width: 65,
    height: 100,
  },
  productContentWrapper: {
    justifyContent: 'space-between',
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
    width: '60%',
    marginTop: 5,
  },

  descText1: {
    color: 'gray',
  },
  descText2: {
    fontSize: 13,
    color: 'black',
    fontWeight: '600',
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
