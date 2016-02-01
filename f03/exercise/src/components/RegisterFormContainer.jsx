import React from 'react';

export default class RegisterFormContainer extends React.Component {
  render() {
    return (
        <div style={{
              width: '20em',
              margin: '0 auto',
              }}>
          <h1>Register!</h1>
          {this.props.children}
        </div>
    );
  }
}
