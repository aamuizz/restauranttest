import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

import Card from './Card';

const ProductItem = ({ image, title, price, children, onSelect }) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={onSelect} useForeground>
          <View >
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: image }} />
            </View>
            <View style={styles.details}>
              <View style={styles.textstyle}>
                <Text style={styles.title}>{title}</Text>
              </View>
              <View style={styles.textstyle}>
                <Text style={styles.price}>${price}</Text>
              </View>
            </View>
            <View style={styles.actions}>{children}</View>

          </View>

        </TouchableCmp>

      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 320,
    width: 250,
    marginTop: 20,
    marginLeft: 8
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
    padding: 10,
    height:'25%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  textstyle:{
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,

  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 18,
    color: '#888',

  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',

  }
});

export default ProductItem;
