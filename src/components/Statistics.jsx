import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, avg } = this.props;

    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>avg: {avg}</p>
      </div>
    );
  }
}

export default Statistics;
