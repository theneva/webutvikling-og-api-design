class EmailInput extends React.Component {
  render() {
    return (
        <label>
          Email
          <input className="form-control"/>
        </label>
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

class ValidatedPasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      verification: '',
      status: '',
      errors: {},
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

    const success = Object.keys(errors).length === 0;

    this.setState({
      errors,
      status: success ? 'has-success' : 'has-error',
    });
  }

  render() {
    return (
        <div className={`control-group ${this.state.status}`}>
          <PasswordInput label="Password"
                         onChange={password => {
                           this.setState({
                             password,
                           });

                           this.validate(password, this.state.verification);
                         }}/>

          <PasswordInput label="Verify password"
                         onChange={verification => {
                           this.setState({
                             verification,
                           });

                           this.validate(this.state.password, verification);
                         }}/>

          {Object.keys(this.state.errors).map(key => <p key={key}>{this.state.errors[key]}</p>)}
        </div>
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

class SignUpButton extends React.Component {
  render() {
    return (
        <button className="btn btn-primary">Sign up!</button>
    );
  }
}

// Higher-order component
class RegisterForm extends React.Component {
  render() {
    return (
        <RegisterFormContainer>
          <EmailInput/>
          <ValidatedPasswordInput/>
          <SignUpButton/>
        </RegisterFormContainer>
    );
  }
}

const form = <RegisterForm />;

ReactDOM.render((
    <div>
      {form}
    </div>
), document.getElementById('container'));
