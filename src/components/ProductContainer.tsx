import { IconButton } from './IconButton'
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { api } from '../services/api';

interface Product {
    id: Number
    nome: string
    descricao: string
    preco: number
    quantidade: number
}

export function ProductContainer({ data }: { data: Product }) {
    const { id, nome, descricao, preco, quantidade } = data;
    const navigation = useNavigation()

    const deleteProduct = () => {
        api.delete(`/produtos/${id}`).then((response) => {
            console.log('Produto excluído com sucesso');
        })
            .catch((error) => {
                console.error('Erro ao excluir o produto', error);
            });
    }

    function openUpdate() {
        navigation.navigate('Update', { data })
    }
    
    
    return (
        <View style={styles.container}>
            <View style={styles.buttonWrapper}>
                <IconButton iconName='edit' onPress={openUpdate} />
                <IconButton iconName='delete' onPress={deleteProduct} />
            </View>

            <View>
                <Text style={styles.TextH1}>{nome}</Text>
                <Text style={styles.TextP}>{descricao}</Text>
                <Text style={styles.TextH1}>Preço: <Text style={styles.TextGreen}>R$ {preco}</Text></Text>
                <Text style={styles.TextP}>Em Estoque: {quantidade}</Text>
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



