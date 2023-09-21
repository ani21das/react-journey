import './App.css';
import Card from './components/card';

function App () {

  let myObj = {
    username: "Anirban",
    age: 23
  }

  let newArr=[1,2,3]

return (
  <>
    <h1 className='bg-green-400 text-black p-4 rounded-lg mb-4'>Tailwind Class</h1>

    <Card username="Anirban" btnText="Visit Me" /> 
    <Card username="Kalyan" /> 

  </>
  );
}

export default App;
