import { useState } from "react";
import './BaiTap01.css'

function BaiTap01() {
    const [name, setName] = useState('')
    const [inputValue, setInputValue] = useState('')

    const handleChangeName = (e) => {
        setInputValue(e.target.value);
    }

    const handleShowName = (e) => {
        setName(inputValue)
    }

    return (
        <div id="hello-app">
            <h1>Hello</h1>
            <input onChange={handleChangeName} type="text" placeholder="Name..." />
            <br />
            <button onClick={handleShowName}  >Click</button>
            <br />
            <span>{name && `Hello, ${name}`}</span>
        </div>
    );
}

export default BaiTap01;