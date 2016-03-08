/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Thing from './Thing.js';

import styles from './styles.js';

class BasicListApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Thing />
      </View>
    );
  }
}

AppRegistry.registerComponent('BasicListApp', () => BasicListApp);
