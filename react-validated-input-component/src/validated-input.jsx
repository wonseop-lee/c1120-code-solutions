import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const password = this.state.password;
    if (password.length === 0) {
      this.errorMessage = 'A password is required.';
      this.icon = <i className="bi bi-x red"></i>;
    } else if (password.length < 8) {
      this.errorMessage = 'Your password is too short.';
      this.icon = <i className="bi bi-x red"></i>;
    }
    if (password.length >= 8) {
      this.errorMessage = '';
      this.icon = <i className="bi bi-check green"></i>;
    }

    return (
      <div>
        <label htmlFor="user-password">Password</label>
        <input type="text" id="user-password" name="password"
          value={this.state.password} onChange={this.handleChange}/>
        <span>{this.icon}</span>
        <p>{this.errorMessage}</p>
      </div>
    );
  }
}

export default ValidatedInput;
