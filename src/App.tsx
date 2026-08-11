import { useState } from 'react'
import './App.css'
import Welcome from './components/welcome';

function App() {
  const [count, setCount] = useState(0)
  const name = "Bilal";
  const age = 23;

  return (
    <>
      <h1>Hello {name}</h1>
      <Welcome name={name} />
      <div>
        <h1>Age: {age}</h1>
        <p>{age >= 18 ? "Adult" : "Minor"}</p>
      </div>
    </>
  )
}

export default App
