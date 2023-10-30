import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, TouchableOpacity, StyleSheet } from 'react-native';

export function IconButton({ iconName, onPress }: { iconName: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={iconName} size={30} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DF6B00',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
        height: 40,
        width: 40
    }
})