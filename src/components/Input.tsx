import React from 'react';
import { TextInput, Text ,View, StyleSheet } from 'react-native';

export function Input({ value }: { value: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{value}</Text>
            <TextInput style={styles.input}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 15
    },

    input: {
        height: 50,
        borderRadius: 10,
        backgroundColor: '#CBCBCB',
        paddingLeft: 15,
        fontSize: 16
    },

    label: {
        fontSize: 16,
        marginBottom: 5,
        color: 'white'
    }
})