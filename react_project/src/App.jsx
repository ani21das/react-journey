import { useState } from 'react';
import './App.css';

function App () {

  let [ counter, setCounter ] = useState( 0 );

  const addValue = () => {
    if ( counter < 20 )
    {
      counter = ++counter;
    }
    setCounter( counter );
    console.log( "Clicked", counter );
  };

  const removeValue = () => {
    if ( counter > 0 )
    {
      counter = --counter;
    }
    setCounter( counter );
    console.log( "Clicked;", counter );
  };

  return (
    <>
      <h1>Counter value : { counter }</h1>
      <br />
      <button onClick={ addValue }>Add Value</button>
      <br />
      <button onClick={ removeValue }>Remove Value</button>
    </>
  );
}

export default App;
