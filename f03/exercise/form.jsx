class ValidatedEmailInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const email = e.target.value;
    this.validate(email);
  }

  validate(value) {
    const errors = {};

    if (!value.match(/.+@.+\..+/)) {
      errors.wrongFormat = 'Email must be on form x@y.z';
    }

    this.props.onValidate(errors);
  }

  render() {
    return (
        <div className={`control-group ${this.props.hasError ? 'has-error' : ''}`}>
          <label>
            Email
            <input className="form-control"
                   onBlur={this.handleChange}/>
          </label>
        </div>
    );
  }
}

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.props.onChange(value);
  }

  render() {
    return (
        <label>
          {this.props.label}
          <input type="password"
                 className="form-control"
                 onBlur={this.handleChange}/>
        </label>
    );
  }
}

class VerifiedPasswordInput extends React.Component {
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

class SignUpButton extends React.Component {
  render() {
    return (
        <button className="btn btn-primary"
                onClick={this.props.onClick}>Sign up!</button>
    );
  }
}

class RegisterFormContainer extends React.Component {
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

class ErrorList extends React.Component {
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

function validate(validator, message) {
  return Component => class extends React.Component {
    render() {
      const result = validator(this.props.value);
      return <Component {...this.props} hasError={!!result}/>
    }
  }
}

// const ValidPassword = validate(v => v && v.length > 4, 'Password must be atleast 4 characters long')(PasswordInputField)

class RegisterForm extends React.Component {
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

ReactDOM.render((
    <RegisterForm/>
), document.getElementById('container'));
