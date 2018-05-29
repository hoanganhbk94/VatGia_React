import {
    Alert
} from 'react-native';

export default class AlertManager {
    static isShow = false;

    static showWarningAlert(title, message) {
        if (!AlertManager.isShow) {
            AlertManager.isShow = true;
            Alert.alert(
                title,
                message,
                [
                    { text: 'OK', onPress: () => AlertManager.isShow = false }
                ],
                { cancelable: false }
            );
        }
    }
}