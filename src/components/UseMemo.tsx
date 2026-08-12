import { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const expensiveValue = useMemo(() => {
    console.log("Calculating...");

    return count * 1000;
  }, [count]);

  return (
    <div>
      <h1>{expensiveValue}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
export default UseMemo