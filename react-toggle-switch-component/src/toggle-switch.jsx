import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
      className: 'notToggled',
      container: 'container notToggled',
      onOrOff: 'OFF'
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    const isToggled = this.state.isToggled;
    if (isToggled) {
      this.setState({ isToggled: false });
      this.setState({ className: 'notToggled' });
      this.setState({ container: 'container notToggled' });
      this.setState({ onOrOff: 'OFF' });
    } else {
      this.setState({ isToggled: true });
      this.setState({ className: 'toggled' });
      this.setState({ container: 'container toggled' });
      this.setState({ onOrOff: 'ON' });
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.container}>
          <button onClick={this.handleToggle} className={this.state.className}></button>
        </div>
        <p>{this.state.onOrOff}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
