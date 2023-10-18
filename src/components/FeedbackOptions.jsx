const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {
        (options = options.map(item => (
          <button key={item} onClick={onLeaveFeedback}>
            {item}
          </button>
        )))
      }
    </div>
  );
};

export default FeedbackOptions;
