import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { NumericInput } from '../components/NumericInput';
import { TextButton } from '../components/TextButton';
import { useState } from 'react';
import { api } from '../services/api';
import { useRoute } from '@react-navigation/native'

interface Product {
  id: Number
  nome: string
  descricao: string
  preco: number
  quantidade: number
}

export function Update(props: any) {
  const { data } = props.route.params;

  const { id, nome, descricao, preco, quantidade } = data;

  const updateProduct = async () => {
    const updatedData = {
      nome: nomeInput,
      descricao: descricaoInput,
      preco: precoInput,
      quantidade: quantidadeInput,
    };

    try {
      const response = await api.put(`/produtos/${id}`, updatedData);
      console.log('Produto atualizado com sucesso');
      setMsg('Produto atualizado com sucesso')
    } catch (error) {
      console.error('Erro ao atualizar o produto', error);
      setMsg('Erro ao atualizar o produto')
    }
  }

  const [msg, setMsg] = useState('Insira os dados para atualizar')
  const [nomeInput, setNome] = useState(nome)
  const [descricaoInput, setDescricao] = useState(descricao)
  const [precoInput, setPreco] = useState(preco)
  const [quantidadeInput, setQuantidade] = useState(quantidade)

  return (
    <View style={styles.container}>
      <ScrollView style={styles.formWrapper}>
        <Input label='Nome' onChangeText={(text) => setNome(text)} value={nomeInput} />
        <TextArea label='Descrição' onChangeText={(text) => setDescricao(text)} value={descricaoInput} />
        <NumericInput label='Preço' onChangeText={(text) => setPreco(text)} value={precoInput.toString()} />
        <NumericInput label='Quantidade' onChangeText={(text) => setQuantidade(text)} value={quantidadeInput.toString()} />
        <TextButton value='Atualizar' onPress={updateProduct} />
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