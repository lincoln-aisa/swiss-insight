import "./questionInput.css";
import submit_icon from "./submit_button.png"
import chatbot_icon from "./chatbot_icon.png"

function QuestionInput() {
  return (
    <main className="question-main">
      
      <form className="input-form">
        <img src={chatbot_icon} alt="chatbot icon"/>
        <input 
          className="question-input-field"
          type= "search"
          placeholder= "Hi, I'm Lora, I am still under development"
        />
        <button>
          <img src={submit_icon} alt="submit button icon" />
        </button>
      </form>
    </main>
  );
}
export default QuestionInput;