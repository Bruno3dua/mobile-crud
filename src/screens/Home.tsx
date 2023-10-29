import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()

  function openScreen() {
    navigation.navigate('New')
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1

    } 
  })

  return (
    <View style={styles.container}>
      <Button
        title='New'
        onPress={openScreen}
      />
    </View>
  );

}