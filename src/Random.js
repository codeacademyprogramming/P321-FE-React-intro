import { useState } from "react";

export const Random = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    setCounter((prevState) => {
      return prevState - 1;
    });
    setCounter((prevState) => {
      return prevState - 1;
    });
    setCounter((prevState) => {
      return prevState - 1;
    });
    setCounter((prevState) => {
      return prevState - 1;
    });
    setCounter((prevState) => {
      return prevState - 1;
    });
    setCounter((prevState) => {
      return prevState - 1;
    });
  };

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <button onClick={handleDecrement}>Decrement</button>
      {counter}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

// Component first appear on the screen
// Some piece of state changes inside component
// Component gets removed from the screen
