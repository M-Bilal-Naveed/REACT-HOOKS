import { useState, useCallback } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Callback Increase
      </button>

      <button onClick={handleClick}>
        Click me
      </button>
    </>
  );
}
export default UseCallback