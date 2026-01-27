import { useState } from "react";

// function Form() {
//     const [data, setdata] = useState("");
//     return (
//         <>
//             <h1>Name</h1>
//             <input
//                 type="text"
//                 placeholder="name"
//                 onChange={(e) => setdata(e.target.value)}
//             />
//             <p>Name:{data}</p>
//         </>
//     )
// }

function Form() {
    const [data, setData] = useState("");
    return (
        <>
            <input
                type="text"
                placeholder="Name"
                onChange={(e) => { setData(e.target.value) }}
            />

            <p>Name:{data}</p>
        </>
    )
}


export default Form;