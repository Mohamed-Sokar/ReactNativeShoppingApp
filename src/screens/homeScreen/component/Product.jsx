import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../../../theme/Colors';
import React from 'react';
import {ProductImage, Star} from '../../../assests/Icons';
import {CustomButton} from '../../../components';

export default function Product() {
  return (
    <View style={styles.container}>
      <View style={styles.firstPartWrapper}>
        <ProductImage />
        {/* <Image source={require()}/> */}
      </View>
      <View style={styles.secondPartWrapper}>
        <Text style={styles.secondPartFirstText}>Fjallraven - Foldsack...</Text>
        <Text style={styles.secondPartSecondText}>Men's Clothing</Text>
        <Text style={styles.secondPartThirdText}>109.95$</Text>
      </View>
      <View style={styles.thirdPartWrapper}>
        <View style={styles.evaluation}>
          <View style={styles.star}>
            <Star />
          </View>
          <Text>3.9</Text>
        </View>
        <View>
          <CustomButton
            title="Buy Now"
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.common.white,
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 17,
    borderRadius: 10,
    marginBottom: 16,
  },
  firstPartWrapper: {
    flex: 0.2,
    justifyContent: 'center',
  },
  secondPartWrapper: {
    flex: 0.6,
    marginLeft: 5,
  },
  secondPartFirstText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.common.black,
    marginTop: 3,
  },
  secondPartSecondText: {
    marginTop: 3,
    fontSize: 12,
    fontWeight: '600',
    color: Colors.gray.light,
    letterSpacing: 1,
  },
  secondPartThirdText: {
    marginTop: 3,
    fontSize: 12,
    fontWeight: '600',
    color: Colors.gray.dark,
  },
  thirdPartWrapper: {
    flex: 0.3,
  },
  evaluation: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    marginTop: 3,
    marginRight: 5,
  },
  star: {
    marginRight: 5,
    marginTop: 4,
  },
  buttonContainer: {
    padding: 7,
  },
  buttonTitle: {
    fontSize: 13,
  },
});
