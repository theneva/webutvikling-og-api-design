import React from 'react';

export default class PasswordInput extends React.Component {
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
