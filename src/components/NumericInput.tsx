import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

export function NumericInput({ value, label, onChangeText }: { value: string; label: string; onChangeText: (text: string) => void }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} keyboardType='numeric' onChangeText={(text) => onChangeText(text)} value={value} />
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