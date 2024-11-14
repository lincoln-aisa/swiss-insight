import "./questionInput.css";
import submit_icon from "./submit_button.png"
import chatbot_icon from "./chatbot_icon.png"
import React, { useState } from 'react';

function QuestionInput({ onSubmit }) {

  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question); 
      setQuestion(""); 
    }
  };

  return (
    <main className="question-main">
      
      <form className="input-form" onSubmit={handleSubmit}>
        <img src={chatbot_icon} alt="chatbot icon"/>
        <input 
          className="question-input-field"
          type= "text"
          placeholder= "Hi, You can ask a question here"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">
          <img src={submit_icon} alt="submit button icon" />
        </button>
      </form>
    </main>
  );
}
export default QuestionInput;