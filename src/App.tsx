import './App.css'
import Welcome from './components/welcome';
import UseCase from './components/UseState';
import UseRef from './components/UseRef';
import { useEffect } from 'react';
import WithoutRerendering from './components/WithoutRerendering';
import UseMemo from './components/UseMemo';
import UseCallback from './components/UseCallback';

function App() {
  const name = "Bilal";
  const age = 23;
  useEffect(() => {
    console.log("Component rendered");
  }, []);

  return (
    <>
      <h1>Hello {name}</h1>
      <Welcome name={name} />
      <div>
        <h1>Age: {age}</h1>
        <p>{age >= 18 ? "Adult" : "Minor"}</p>
      </div>
      <UseCase />
      <UseRef />
      <UseMemo />
      <WithoutRerendering />
      <UseCallback />
    </>
  )
}

export default App
