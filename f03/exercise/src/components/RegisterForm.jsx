import React from 'react';

import RegisterFormContainer from './RegisterFormContainer.jsx';
import ValidatedEmailInput from './ValidatedEmailInput.jsx';
import ErrorList from './ErrorList.jsx';
import VerifiedPasswordInput from './VerifiedPasswordInput.jsx';
import SignUpButton from './SignUpButton.jsx';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      emailErrors: {},
      passwordErrors: {},
    }
  }

  hasErrors() {
    const errors = {...this.state.emailErrors, ...this.state.passwordErrors};
    return Object.keys(errors).length > 0;
  }

  onSubmit() {
    if (this.hasErrors()) {
      console.log({...this.state.emailErrors, ...this.state.passwordErrors});
      console.log(this.state.errors);
    }
  }

  render() {
    return (
        <RegisterFormContainer>
          <ValidatedEmailInput hasError={Object.keys(this.state.emailErrors).length > 0}
                               onValidate={emailErrors => this.setState({emailErrors})}/>

          <ErrorList errors={this.state.emailErrors}/>

          <VerifiedPasswordInput hasError={Object.keys(this.state.passwordErrors).length > 0}
                                 onValidate={passwordErrors => this.setState({passwordErrors})}/>

          <ErrorList errors={this.state.passwordErrors}/>

          <SignUpButton onClick={this.onSubmit}/>
        </RegisterFormContainer>
    );
  }
}
