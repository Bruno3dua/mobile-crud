import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { NumericInput } from '../components/NumericInput';
import { TextButton } from '../components/TextButton';
import { useState } from 'react';
import { api } from '../services/api';

export function New() {
  const [msg, setMsg] = useState('Insira os dados do produto')
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState('')
  const [quantidade, setQuantidade] = useState('')

  const addProduct = async () => {
    try {
      const data = {
        nome,
        descricao,
        preco,
        quantidade,
      }
      const response = await api.post('/New', data)

      console.log('Produto adicionado com sucesso:')
      setMsg('Produto adicionado com sucesso')

      setNome('')
      setDescricao('')
      setPreco('')
      setQuantidade('')

    } catch (error) {
      console.error('Erro ao adicionar o produto:', error)
      setMsg('Erro ao adicionar o produto')
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.formWrapper}>
        <Input label='Nome' onChangeText={(text) => setNome(text)} value={nome} />
        <TextArea label='Descrição' onChangeText={(text) => setDescricao(text)} value={descricao} />
        <NumericInput label='Preço' onChangeText={(text) => setPreco(text)} value={preco} />
        <NumericInput label='Quantidade' onChangeText={(text) => setQuantidade(text)} value={quantidade} />
        <TextButton value='Adicionar' onPress={addProduct} />
        <Text style={{ color: 'white' }}>{msg}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#313131'
  },

  formWrapper: {
    width: 350,
    maxHeight: 500
  }
})