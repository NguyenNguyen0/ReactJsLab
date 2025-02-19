import { useState } from "react";
import './BaiTap02.css'

function BaiTap02() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    return (
        <div id="two-sum-app">
            <h1>Sum two integer</h1>
            <input onChange={e => setNum1(parseInt(e.target.value))} placeholder="Input Integer" type="number" name="num1" id="" />
            <br />
            <input onChange={e => setNum2(parseInt(e.target.value))} placeholder="Input Integer" type="number" name="num2" id="" />
            <br />
            <button onClick={e => setResult(num1 + num2)}>Calculate</button>
            <br />
            <span>{result && `Result: ${num1} + ${num2} = ${result}`}</span>
        </div>
    );
}

export default BaiTap02;