import {
    Dimensions
} from 'react-native';

export default class Common {

    static window = Dimensions.get('window');

    static log(message) {
        console.log(message);
    }
}