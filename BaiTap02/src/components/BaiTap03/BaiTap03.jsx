import { useState } from "react";
import './BaiTap03.css'

function BaiTap03() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState(0);
  const [calResult, setCalResult] = useState(0);

  const handleCalculate = (e) => {
    switch (operator) {
      case '+':
        setCalResult(num1 + num2)
        break;
      case '-':
        setCalResult(num1 - num2)
        break;
      case '*':
        setCalResult(num1 * num2)
        break;
      case '/':
        setCalResult(num1 / num2)
        break;

      default:
        break;
    }
  }

  const handleChangeOperator = (e) => {
    setOperator(e.target.value);
  }
  return (
    <div id="calculator-app">
      <h1>Calculator</h1>
      <input onChange={e => setNum1(parseInt(e.target.value))} placeholder="Input Integer" type="number" name="numCal1" id="" />
      <br />
      <input onChange={e => setNum2(parseInt(e.target.value))} placeholder="Input Integer" type="number" name="numCal2" id="" />
      <br />
      <label htmlFor="plus">Plus</label>
      <input value={'+'} onChange={handleChangeOperator} type="radio" name="operator" id="plus" />
      <br />
      <label htmlFor="subtract">Subtract</label>
      <input value={'-'} onChange={handleChangeOperator} type="radio" name="operator" id="subtract" />
      <br />
      <label htmlFor="multi">Multi</label>
      <input value={'*'} onChange={handleChangeOperator} type="radio" name="operator" id="multi" />
      <br />
      <label htmlFor="division">Division</label>
      <input value={'/'} onChange={handleChangeOperator} type="radio" name="operator" id="division" />
      <br />

      <button onClick={handleCalculate} >Calculate</button>

      <br />
      <span>{calResult && `Result: ${calResult}`}</span>
    </div>
  );
}

export default BaiTap03;