import React from 'react';
import ReactDOM from 'react-dom';
import Results from './Result';
import '../myStyles.css'

function PromptForm({setInputText, prompt, setPrompt, inputText}) {

  const data = {
    prompt: `${inputText}`,
    max_tokens: 50
  }

  const inputPromptHandler = (event) => {
    setInputText(event.target.value);
  }

  const submitPromptHandler = (event) => {
    event.preventDefault();


    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify((data)),
    }) .then(response => {
      response.json() .then(jsonResponse => {
      setPrompt([
        ...prompt, 
        {txt: inputText, result: jsonResponse.choices[0].text, id: Math.floor(Math.random()*1000)}
      ])
      //Resets state to empty
      setInputText("");
      })
    })
  }
  
  return (
    <div>
      <form onSubmit={submitPromptHandler}>
        <label>
          <h4>Enter your prompt:</h4>
          <p>
            <textarea value={inputText} onChange={inputPromptHandler}/>
          </p>
        </label>
        <button type="submit" value="Submit">Ask Me!</button>
      </form>
    </div>
  )
}

export default PromptForm;