import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { AddButton } from '../components/AddButton';
import { ScrollView } from 'react-native';
import { ProductContainer } from '../components/ProductContainer';
import { useState, useEffect } from 'react';
import { api } from '../services/api'

interface Product {
  id: Number
  nome: string
  descricao: string
  preco: number
  quantidade: number
}

export function Home() {
  const navigation = useNavigation()
  const [produtos, setProdutos] = useState<Product[]>([]);

  useEffect(() => {
    api.get('/produtos').then((response) => {

      setProdutos(response.data);

    }).catch((error) => {

      console.error('Erro ao obter a lista de produtos:', error);

    });
  }, [produtos]);

  function openScreen() {
    navigation.navigate('New')
  }


  return (
    <View style={styles.container}>
      <ScrollView style={styles.productWrapper}>
        {produtos.map((produto) => (
          <ProductContainer key={produto.id.toString()} data={produto} />
        ))}
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