import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../home/HomeScreen';

const AppNavigator = createStackNavigator(
    {
        Home: { screen: HomeScreen },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: false
        }
    }
);

export default AppNavigator;