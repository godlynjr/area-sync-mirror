import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('main', () => App);

if (Platform.OS === 'android') {
    const rootTag = document.getElementById('root') || document.getElementById('main');
    AppRegistry.runApplication('main', { rootTag });
}

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('main');
    AppRegistry.runApplication('main', { rootTag });
}