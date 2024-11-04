import "./questionInput.css";
import submit_icon from "./submit_button.png"
import chatbot_icon from "./chatbot_icon.png"
import React, { useState } from 'react';

function QuestionInput({ onSubmit }) {

  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question);  // Pass the question to the parent component (App.js)
      setQuestion(""); // Clear the input field after submission
    }
  };

  return (
    <main className="question-main">
      
      <form className="input-form" onSubmit={handleSubmit}>
        <img src={chatbot_icon} alt="chatbot icon"/>
        <input 
          className="question-input-field"
          type= "text"
          placeholder= "Hi, I'm Lora, I am still under development"
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