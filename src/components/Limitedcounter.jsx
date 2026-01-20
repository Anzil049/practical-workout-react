import { useState } from "react";

function LimitedCounter() {
    const [count, setcount] = useState(0);

    const increaseCount = () => {
        if (count < 10) {
            setcount(count + 1)
        }
    };


    return (
        <>
            <h1>limited counter</h1>
            <button onClick={increaseCount} disabled={count===10}>limited counter</button>
            <p>Count:{count}</p>

            {count===10 && <p>Maximum limit reached</p>}
        </>
    )
}

export default LimitedCounter;