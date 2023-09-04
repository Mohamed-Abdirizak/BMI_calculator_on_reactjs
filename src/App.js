// import underWeight from './images/underweight.png'
// import overWeight from './images/overweight.png'
// import healthy from './images/healthy.png'

import React,{useState} from 'react'
import './index.css'
function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");




  let calcBmi = (event) =>{
    //////revent submitting
    event.preventDefault();
    if(weight === 0 || height === 0)
    {
      alert("please enter a valid weight and height")
    }
    else {
      let bmi = (weight / (height * height) * 703);
      setBmi(bmi.toFixed(1))


      /////////login for messages
      if (bmi <25)
      {
        setMessage("you are underweight..");
      }
      else if (bmi >=25 && bmi <30)
      {
        setMessage("you are a helthy...");
      }
      else{
        setMessage("You are overweight...")
      }


    }
  }

  let reload = () =>{
    window.location.reload()
  }
  let imgSrc;
  if (bmi <1)
  {
    imgSrc = null;
  }
  else{
    if(bmi <25)
    {
      imgSrc = require('../src/images/underweight.png')
    }
    else if( bmi > 25 & bmi < 30)
    {
      imgSrc = require('../src/images/healthy.png')

    }
    else{
      imgSrc = require('../src/images/overweight.png')
    }
  }




  // else{
  //   if (bmi <25)
  //   {
  //     imgSrc = {underWeight};
  //   }
  //   else if(bmi >=25 && bmi <30)
  //   {
  //     imgSrc = {healthy}
  //   }
  //   else{
  //     imgSrc = {overWeight}
  //   }
  // }


  return (
    
    <div className="app">
        <div className="container">
          <h2 className="center">BMI Calculator</h2>
          <form onSubmit={calcBmi}>
            <div>
              <labe>Weight (lbs)</labe>
              <input value={weight} type='number' onChange={(event) =>setWeight(event.target.value)} />

            </div>
            <div>
              <labe>height (in)</labe>
              <input value={height} type='number' onChange={(event) =>setHeight(event.target.value)} />

            </div>

            <div>
              <button className="btn" type="submit">Submit</button>
              <button className="btn btn-outline" onClick={reload} type="submit">reload</button>
            </div>
          </form>

          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>

          <div className="img-container">
            <img src={imgSrc} alt="" ></img>

          </div>

        </div>
    </div>
  );
}

export default App;
