import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../home/HomeScreen';
import DetailProductScreen from "../detail_product/DetailProductScreen";

const AppNavigator = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        Detail: { screen: DetailProductScreen }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: true
        }
    }
);

export default  AppNavigator;

export class ScreenName {
    static home             = 'Home';
    static detailProduct    = 'Detail';
}