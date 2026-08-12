import { useRef } from "react";

function WithoutRerendering() {
  const countRef = useRef(0);

  function increase() {
    countRef.current++;
    console.log(countRef.current);
  }

  return (
    <>
      <button onClick={increase}>Increase</button>
    </>
  );
}

export default WithoutRerendering