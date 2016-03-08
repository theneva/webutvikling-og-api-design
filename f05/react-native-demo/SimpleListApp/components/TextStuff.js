import React from 'react-native';

const {
  View,
  Text,
} = React;

export default () => (
    <View>
      <Text style={styles.instructions}>
        To get started, edit index.android.js
      </Text>
      <Text style={styles.instructions}>
        Shake or press menu button for dev menu
      </Text>
    </View>
);

const styles = {
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};
