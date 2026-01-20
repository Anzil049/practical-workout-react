import { useState, useEffect } from "react";

function Titlecounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {

    document.title = `Count: ${count}`;

    return()=>{
        document.title="react"
    }
    
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Titlecounter;
