import React from 'react';
import PasswordInput from './PasswordInput.jsx';

export default class VerifiedPasswordInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      verification: '',
    };
  }

  validate(password, verification) {
    const errors = {};

    if (password.length < 4) {
      errors.password = 'Password is not >= 4 chars long';
    }

    if (verification !== password) {
      errors.verification = 'Verification does not match password';
    }

    this.props.onValidate(errors);
  }

  render() {
    return (
        <div className={`control-group ${this.props.hasError ? 'has-error' : ''}`}>
          <PasswordInput label="Password"
                         onChange={password => {
                           this.setState({password});
                           this.validate(password, this.state.verification);
                         }}/>

          <PasswordInput label="Verify password"
                         onChange={verification => {
                           this.setState({verification});
                           this.validate(this.state.password, verification);
                         }}/>
        </div>
    );
  }
}
