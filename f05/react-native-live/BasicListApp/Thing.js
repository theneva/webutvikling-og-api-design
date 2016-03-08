import React, {View, Text} from 'react-native';
import styles from './styles.js';

export default class Thing extends React.Component {
  render() {
    return (
        <View>
          <Text style={styles.welcome}>
            HEI
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Shake or press menu button for dev menu
          </Text>
        </View>
      );
  }
}
