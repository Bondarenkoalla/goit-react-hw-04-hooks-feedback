import React from "react";
import { useState } from "react";

import Statistics from "./statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
   
 const  addFeedback = (option) => {
    setState((prevState) => {
      return {...prevState, [option]: prevState[option] + 1 };
    });
  };
  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const { good } = state;

    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

 
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={addFeedback}
          ></FeedbackOptions>
          {/* <FeedbackOptions
            onGood={this.addGoodFeedback}
            onNeutral={this.addNeutralFeedback}
            onBad={this.addBadFeedback}
          /> */}
        </Section>
        <Section title="Statistics">
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );

}
// class Feedback extends React.Component {
 

  // addGoodFeedback = () => {
  //   this.setState((prevState) => {
  //     return { good: prevState.good + 1 };
  //   });
  // };
  // addNeutralFeedback = () => {
  //   this.setState((prevState) => {
  //     return { neutral: prevState.neutral + 1 };
  //   });
  // };
  // addBadFeedback = () => {
  //   this.setState((prevState) => {
  //     return { bad: prevState.bad + 1 };
  //   });
  // };

  
// }

export default Feedback;
