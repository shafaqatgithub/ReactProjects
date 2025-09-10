import { useState } from "react";
const App = () => {
  // let counter = 0;
  let [counter, setCounter] = useState(9);

  const AddValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };
  const DeleteValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Hello JCE {counter}</h1>
      <h5> Increment Value: {counter}</h5>
      <button onClick={AddValue}>Increment</button>

      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </>
  );
};

export default App;
