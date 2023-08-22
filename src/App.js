
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(){
  const[steps,setStep] = useState(1);
  const[isOpen,setIsOpen] = useState(true)

  function handlePrevious(){
    if(steps>1) setStep((currentStep)=>currentStep-1)
  }
  function handleNext(){
    if(steps<3) setStep((currentStep)=>currentStep+1)

  }
  return(
    <>
    <button className="close" onClick={()=> setIsOpen((currentOpen)=>!currentOpen)}>&times;</button>

    {isOpen && (<div className="steps">
    <div className="numbers">
    <div className={steps>=1 ? "active": ""}>1</div>
    <div  className={steps>=2 ? "active": ""}>2</div>
    <div  className={steps>=3 ? "active": ""}>3</div>
    </div>
    <p className="message">Steps {steps}: {messages[steps-1]}</p>
    <div className="buttons">
      <button style={{backgroundColor:"#7950f2" , color:"#fff"}}
              onClick={handlePrevious}>previous</button>
      <button style={{backgroundColor:"#7950f2" , color:"#fff"}}
              onClick={handleNext}>next</button>
    </div>
  </div>)}
  </>
  )
}

