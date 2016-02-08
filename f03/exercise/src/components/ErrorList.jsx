import React from 'react';

export default class ErrorList extends React.Component {
  render() {
    return (
        <div>
          {Object.keys(this.props.errors).map(key => (
          <p key={key}>{this.props.errors[key]}</p>
              ))}
        </div>
    );
  }
}
