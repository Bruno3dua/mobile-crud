import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function AddButton({ title, onPress }: { title: string; onPress: () => void }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Icon name="add" size={40} color="white" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        bottom: 40,
        right: 30,
        position: 'absolute',
        backgroundColor: '#DF6B00',
        borderRadius: 30,
        borderBottomRightRadius: 10,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
})