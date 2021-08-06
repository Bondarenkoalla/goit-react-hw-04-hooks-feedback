import React from "react";
import { useState, useEffect } from "react";

import Statistics from "./statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setpositivePercentage] = useState(0);

  useEffect(() => {
    setTotal(good + bad + neutral);
    setpositivePercentage(Math.round((good / total) * 100));
  }, [good, neutral, bad, total]);

  const addFeedback = (e) => {
    const { name } = e.target;
    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
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
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={positivePercentage}
        />
      </Section>
    </>
  );
};

//  const  addFeedback = (option) => {
//     setState((prevState) => {
//       return {...prevState, [option]: prevState[option] + 1 };
//     });
//   };
//

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
