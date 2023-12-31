
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(){
  return(
    <div>
         <Steps/>
    </div>
 
  )
}

function Steps(){
  const[steps,setStep] = useState(1);
  const[isOpen,setIsOpen] = useState(true)

  function handlePrevious(){
    if(steps>1) setStep((currentStep)=>currentStep-1)
  }
  function handleNext(){
    if(steps<3) setStep((currentStep)=>currentStep+1)

  }
  return(
    <div>
    <button className="close" onClick={()=> setIsOpen((currentOpen)=>!currentOpen)}>&times;</button>

    {isOpen && (
    <div className="steps">
    <div className="numbers">
    <div className={steps>=1 ? "active": ""}>1</div>
    <div  className={steps>=2 ? "active": ""}>2</div>
    <div  className={steps>=3 ? "active": ""}>3</div>
    </div>
    <StepMessage steps={steps}>

       {messages[steps-1]} 
       
       </StepMessage>
    <div className="buttons">
      <Button bgColor="#7950f2" color="#fff" handlePrevious={handlePrevious}> <span>👈</span> previous </Button>
     <Button text="next" bgColor="#7950f2" color="#fff" handlePrevious={handleNext}> previous<span>👉</span> </Button>
    </div>
  </div>)}
  </div>
  )
}

function StepMessage({steps , children}){
  return(
    <div className="message">
      <h3>Steps {steps}:</h3> 
      {children}
      </div>
  )
}

function Button({bgColor , color , handlePrevious , children}){
  return(
    <button style={{backgroundColor:bgColor , color:color}}
    onClick={handlePrevious}>{children}</button>
  )
}

