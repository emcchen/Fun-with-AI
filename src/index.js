import React from 'react';
import ReactDOM from 'react-dom';
import PromptForm from './components/PromptForm';
import Results from './components/Result';


function App () {

  // prompt/text that user enters
  const[inputText, setInputText] = React.useState(""); 

  // results to show.. input with response
  const[prompt, setPrompt] = React.useState([]);

  return (
    <div className="App">
      <header>
        <h1>Talk to me! I'm AI</h1>
      </header>
      <PromptForm 
        inputText={inputText} 
        prompt={prompt}
        setPrompt={setPrompt}
        setInputText={setInputText}/>    
      <Results prompt={prompt}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;