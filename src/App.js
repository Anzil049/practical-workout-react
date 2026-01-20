import Counter from "./components/Counter";
import Form from "./components/Form";
import LimitedCounter from "./components/Limitedcounter";
import Titlecounter from "./components/Titlecounter";
import { useState } from "react";

function App() {

  const [show, setShow] = useState(true);

  return (
    <>
      <h1>counter</h1>
      <Counter />
      <Form />
      <LimitedCounter />
      <button onClick={() => setShow(!show)}>
        Toggle Counter
      </button>

      {show && <Titlecounter />}
    </>
  )
}


export default App;