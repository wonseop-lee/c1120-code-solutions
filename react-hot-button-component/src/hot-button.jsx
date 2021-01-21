import React from 'React';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clickCount: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let clickCount = this.state.clickCount;
    this.setState({clickCount: ++clickCount});
  }

  render() {
    let count = this.state.clickCount;
    let className = 'three-under';
    if (count >= 3) {
      className = 'six-under';
    }
    if (count >= 6) {
      className = 'nine-under';
    }
    if (count >= 9) {
      className = 'twelve-under';
    }
    if (count >= 12) {
      className = 'fifteen-under';
    }
    if (count >= 15) {
      className = 'eighteen-under';
    }

    return (
    <button onClick={this.handleClick} className={className}>Hot Button</button>
    );
  }
}

export default HotButton;
