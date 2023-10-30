import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

export function TextArea({ value }: { value: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{value}</Text>
            <TextInput style={styles.input} multiline={true} numberOfLines={4} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 15
    },

    input: {
        textAlignVertical: 'top',
        height: 100,
        borderRadius: 10,
        backgroundColor: '#CBCBCB',
        padding: 15,
        fontSize: 16
    },

    label: {
        fontSize: 16,
        marginBottom: 5,
        color: 'white'
    }
})