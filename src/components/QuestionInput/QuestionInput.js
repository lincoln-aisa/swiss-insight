import "./questionInput.css";

function QuestionInput() {
  return (
    <div className="question-input">
      {/*<img />*/}
      <input 
        className="question-input-field"
        type= "text"
        placeholder= "  Ask me any question about Switzerland"
        />
    </div>
  );
}
export default QuestionInput;