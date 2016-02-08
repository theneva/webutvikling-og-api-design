import React from 'react';

export default class SignUpButton extends React.Component {
  render() {
    return (
        <button className="btn btn-primary"
                onClick={this.props.onClick}>Sign up!</button>
    );
  }
}
