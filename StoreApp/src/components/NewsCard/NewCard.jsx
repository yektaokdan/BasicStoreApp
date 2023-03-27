import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './NewCard.style';

export default function NewCard(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.products.imgURL}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.products.title}</Text>
        <Text style={styles.price}>{props.products.price}</Text>
        {props.products.inStock == false ? (
          <Text style={styles.inStock}>Stokta Var</Text>
        ) : (
          <Text style={styles.noneStock}>Stokta Yok</Text>
        )}
      </View>
    </View>
  );
}
