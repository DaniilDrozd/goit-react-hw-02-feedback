
import propTypes from "prop-types";
import { nanoid } from "nanoid";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div style={{display: "flex",
    gap: 10,}}>
    {options.map((option) => (
      <button
        key={nanoid()}
        style={{ width: 100,
          padding: 5,
          fontSize: 20,
          bordeRadius: 5,
          backgroundColor: "bisque"
    }}
        type="btn"
        onClick={onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;