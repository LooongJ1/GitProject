/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppJump from "./Jump";

AppRegistry.registerComponent(appName, () => AppJump);
