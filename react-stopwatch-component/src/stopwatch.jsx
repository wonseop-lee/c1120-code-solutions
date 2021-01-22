import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCounting: false,
      isReset: true,
      timerID: 0
    };
    this.icon = <i className="bi bi-play-fill"></i>;
    this.count = 0;
    this.handleStartPause = this.handleStartPause.bind(this);
  }

  handleStartPause() {
    const isCounting = this.state.isCounting;
    const isReset = this.state.isReset;
    if (!isCounting && isReset) {
      this.setState({ isCounting: true, isReset: false });
      const timerID = setInterval(() => {
        this.count++;
        this.setState({ timerID: timerID });
      }, 1000);
      this.icon = <i className="bi bi-pause-fill"></i>;
    }
    if (isCounting) {
      clearInterval(this.state.timerID);
      this.setState({ isCounting: false, timerID: 0 });
      this.icon = <i className="bi bi-play-fill"></i>;
    }
    if (!isCounting && !isReset) {
      this.setState({ isReset: true });
      this.count = 0;
    }
  }

  render() {
    return (
      <div>
        <div className='counter-container'>
          <p className='count'>{this.count}</p>
        </div>
        <button onClick={this.handleStartPause}>
          {this.icon}
        </button>
      </div>
    );
  }
}

export default Stopwatch;
