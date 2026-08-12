import { useRef } from "react";

function UseRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <input ref={inputRef} />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default UseRef;