import { useState } from "react";

function Form() {
    const [data, setdata] = useState("");
    return (
        <>
            <h1>Name</h1>
            <input
                type="text"
                placeholder="name"
                onChange={(e) => setdata(e.target.value)}
            />
            <p>Name:{data}</p>
        </>
    )
}

export default Form;