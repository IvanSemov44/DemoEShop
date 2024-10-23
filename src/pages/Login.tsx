import { useState } from "react"



export function Login() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <label>
                <input type="text" onChange={handleChange} />
            </label>
            <p>Input Value:{inputValue}</p>
        </div>
    )
}