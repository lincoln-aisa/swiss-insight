import "./questionInput.css";

function QuestionInput() {
  return (
    <div className="question-input">
      {/*<img />*/}
      <input 
        className="question-input-field"
        type= "search"
        placeholder= "Hi, I'm Lora, Ask me any question about Switzerland"
        />
    </div>
  );
}
export default QuestionInput;