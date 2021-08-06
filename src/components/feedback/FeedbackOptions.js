import React from "react";
import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

// const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
//   <>
//     <button className={styles.button} type="button" onClick={onGood}>
//       Good
//     </button>
//     <button className={styles.button} type="button" onClick={onNeutral}>
//       Neutral
//     </button>
//     <button className={styles.button} type="button" onClick={onBad}>
//       Bad
//     </button>
//   </>
// );

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((option, idx) => (
      <button
        className={styles.button}
        type="button"
        name={option}
        key={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
FeedbackOptions.prototype = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
