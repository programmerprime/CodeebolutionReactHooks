import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  // the useRef hook is used to access DOM nodes directly

  useEffect(() => {
    // focus the input element
    inputRef.current.focus();

    buttonRef.current.style.backgroundColor = "green";
  });

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button ref={buttonRef}>Hi button</button>
    </div>
  );
};

export default FocusInput;
