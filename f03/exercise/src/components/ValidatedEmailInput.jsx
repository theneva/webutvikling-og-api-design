import React from 'react';

export default class ValidatedEmailInput extends React.Component {
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
