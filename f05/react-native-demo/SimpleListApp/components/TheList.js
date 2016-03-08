import React, {
  View,
  Text,
  ListView,
} from 'react-native';

export default class TheList extends React.Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      source: dataSource.cloneWithRows(props.data),
    };
  }

  render() {
    return <ListView
      style={{marginTop: 200}}
      dataSource={this.state.source}
      renderRow={data => <Text>– {data}</Text>}/>
    // return <Text>Hi</Text>;
  }
};
