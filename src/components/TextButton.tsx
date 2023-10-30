import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export function TextButton({ value, onPress }: { value: string; onPress: () => void }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.textButton}>{value}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#DF6B00'
    },

    textButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: '800'
    }
})
