import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  clickOnButton = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  onLeaveFeedback = event => {
    const option = event.target.textContent;
    this.clickOnButton(option);
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const avg = (this.state.good * 100) / total;
    return (
      <div>
        <Section title="Please leave feedback" children>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            avg={avg}
          />
        </Section>
      </div>
    );
  }
}
