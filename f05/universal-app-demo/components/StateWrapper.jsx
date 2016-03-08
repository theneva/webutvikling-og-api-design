import React from 'react';

export default class StateWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: 'Hello'};
  }

  componentWillMount() {
    if (this.props.active) {
      console.log('was active');
      setTimeout(() => this.setState({message: 'bananas!'}), 1000);
    } else {
      console.log('was not active');
    }
  }

  render() {
    return (<p>{this.state.message}</p>);
  }
};
