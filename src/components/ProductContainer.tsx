import { IconButton } from './IconButton'
// import { Container, ButtonWrapper, DataWrapper } from "./styles" todo

import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export function ProductContainer() {
    const navigation = useNavigation()

    function openUpdate() {
        navigation.navigate('Update')
    }
    return (
        <View style={styles.container}>
            <View style={styles.buttonWrapper}>
                <IconButton iconName='edit' onPress={openUpdate}/>
                <IconButton iconName='delete' onPress={openUpdate}/>
            </View>

            <View>
                <Text style={styles.TextH1}>Nome do produto</Text>
                <Text style={styles.TextP}>Descrição do produto</Text>
                <Text style={styles.TextH1}>Preço: <Text style={styles.TextGreen}>R$ {'0.00'}</Text></Text>
                <Text style={styles.TextP}>Em Estoque: {'---'}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#4F4F4F',
        margin: 10,
        borderRadius: 10,
        position: 'relative',
        minHeight: 130,
        padding: 20
    },

    buttonWrapper: {
        position: 'absolute',
        flex: 1,
        gap: 10,
        zIndex: 20,
        top: 10,
        right: 10
    },

    TextH1: {
        color: 'white',
        fontWeight: '800'
    },

    TextP: {
        color: '#A9A9A9'
    },

    TextGreen: {
        color: '#00FF0A'
    }
})



