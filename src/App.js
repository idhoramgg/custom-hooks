import React from "react";

// css
import './App.css';

// components
import CounterWithClass from "./components/CounterWithClass";
import CounterWithHooks from "./components/CounterWithHooks";
import FormWithHooks from './components/FormWithHooks';
import ConsumeUseFetch from './components/ConsumeUseFetch';
// hooks

function App() {
  return(
    <div className="App">
      <h2> Counter with class</h2>
      <CounterWithClass/>
      <hr/>
      <h2> Counter with hooks</h2>
      <CounterWithHooks/>
      <hr/>
      <FormWithHooks/>
      <hr/>
      <ConsumeUseFetch/>
    </div>
  ) 
}

export default App;
