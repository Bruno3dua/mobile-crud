import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { AddButton } from '../components/AddButton';
import { ScrollView } from 'react-native';
import { ProductContainer } from '../components/ProductContainer';


export function Home() {
  const navigation = useNavigation()

  function openScreen() {
    navigation.navigate('New')
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.productWrapper}>
        <ProductContainer />
      </ScrollView>

      <AddButton
        title=''
        onPress={openScreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#313131'
  },

  productWrapper: {
    width: 350,
    maxHeight: 550,
    borderRadius: 10,
    backgroundColor: '#3E3E3E'
  }
})