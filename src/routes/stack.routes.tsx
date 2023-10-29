import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { New } from '../screens/New'
import { Update } from '../screens/Update'

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#3E3E3E',
                },
                headerTintColor: 'white'
            }}
        >
            <Screen
                name='Home'
                options={{
                    title: 'Produtos cadastrados'
                }}
                component={Home}
            />

            <Screen
                name='New'
                options={{
                    title: 'Cadastrar produto'
                }}
                component={New}
            />

            <Screen
                name='Update'
                component={Update}
            />
        </Navigator>
    )
}