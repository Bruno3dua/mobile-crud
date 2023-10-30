import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { NumericInput } from '../components/NumericInput';
import { TextButton } from '../components/TextButton';

export function Update() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.formWrapper}>
        <Input value='Nome:'/>
        <TextArea value='Descrição:'/>
        <NumericInput value='Preço:'/>
        <NumericInput value='Quantidade:'/>
        <TextButton value='Atualizar'/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#313131'
  },

  formWrapper: {
    width: 350,
    maxHeight: 500
  }
})