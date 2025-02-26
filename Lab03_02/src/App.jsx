import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [invest, setInvest] = useState('')
  const [rate, setRate] = useState('')
  const [goal, setGoal] = useState('')
  const [result, setResult] = useState([])

  const handleCalculation = (e) => {
    e.preventDefault()

    if (!invest || !rate || !goal) {
      alert('Enter a valid number')
      return;
    }

    const res = [];
    let currentYear = (new Date).getFullYear()
    let currentInvest = invest;
    let nextInvest = invest

    while (currentInvest <= goal) {
      nextInvest += rate;
      res.push({year: currentYear, invest: currentInvest, rate, result: nextInvest})
      currentYear++;
      currentInvest = nextInvest;
    }
    setResult(res)
  }

  return (
    <div className='mx-4'>
      <h1 className='mt-4 text-center'>Calculate Invest</h1>

      <div>
          <form onSubmit={handleCalculation}>
            <label className='form-label' htmlFor="">Invest</label>
            <input className='form-control' type="number" value={invest} onChange={e => setInvest(parseInt(e.target.value))} />

            <label className='form-label' htmlFor="">Rate</label>
            <input className='form-control' type="number" value={rate} onChange={e => setRate(parseInt(e.target.value))} />
            
            <label className='form-label' htmlFor="">Goal</label>
            <input className='form-control' type="number" value={goal} onChange={e => setGoal(parseInt(e.target.value))} />

            <button className="btn btn-primary mt-4 d-block m-auto">Click</button>
          </form>
      </div>

      <h1 className='mt-4 text-center'>Result</h1>

      <div className='mt-4'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Year</th>
              <th>Invest</th>
              <th>Rate</th>
              <th>Result</th>
            </tr>
          </thead>

          <tbody>
            {result.length > 0 && result.map((result, index) => (
              <tr key={index}>
                <td>{result.year}</td>
                <td>{result.invest}</td>
                <td>{result.rate}</td>
                <td>{result.result}</td>
              </tr>
            ))}
          </tbody>
              
        </table>
      </div>
    </div>
  )
}

export default App
