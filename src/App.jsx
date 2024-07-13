import { useState } from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [message, setMessage] = useState('')
  const [bmi, setBmi] = useState(0)


  const calcBMI = () => {
    event.preventDefault()
    if(weight === 0 || height === 0){
      setMessage('Enter value')
    }

    let bmi = (weight/(height * height)*703)
    setBmi(bmi.toFixed(1))

    if(bmi < 25){
      setMessage('you are underweight')
    }else if(bmi >= 25 && bmi < 30){
      setMessage('heavy weight person')
    }else{
      setMessage('you areoverweight')
    }

  }
  return (
    <div className='container'>
      <div className='form-box'>
        <form onSubmit={calcBMI} className='form'>
        <h2>BMI Calculator</h2>

        <p>Weight (lbs)</p>
          <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)}  />
          <p>Height (in)</p>
          <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
          <div className='form-btns'>
          <button type='submit' className='submit-btn'>Sumbit</button>
          <button className='reload-btn'>Reload</button>
          </div>
        </form>
        <div className='result-box'>
        <h3>Your BMI is:{bmi === 0 ? '' : bmi} </h3>
        <p>{message} </p>
      </div>
      </div>
      
    </div>
  )
}

export default App
