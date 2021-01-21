import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
    this.className = 'notToggled';
    this.containerName = 'container notToggled';
    this.onOrOff = 'OFF';
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    const isToggled = this.state.isToggled;

    if (isToggled) {
      this.setState({ isToggled: false });
      this.className = 'notToggled';
      this.containerName = 'container notToggled';
      this.onOrOff = 'OFF';
    } else {
      this.setState({ isToggled: true });
      this.className = 'toggled';
      this.containerName = 'container toggled';
      this.onOrOff = 'ON';
    }
  }

  render() {
    return (
      <div>
        <div className={this.containerName}>
          <button onClick={this.handleToggle} className={this.className}></button>
        </div>
        <p>{this.onOrOff}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
