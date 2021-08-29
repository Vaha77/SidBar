import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("rendrd");
  return (
    <div>
      <h1>Hooks count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default App;
