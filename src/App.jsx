
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [Principle , setPrinciple] = useState("")
  const [rate , setRate] = useState("")
  const [year , setYear]= useState("")
  const [interest, setInterest] = useState(0)
  const [isPrinciple ,setIsPrinciple] = useState(true)
  const [isRate,setIsRate] = useState(true)
  const [isYear,setIsYear]= useState(true)

  const Validate = (e)=>{
    console.log(e.target.name);
    
    console.log(e.target.value);

    if(!!e.target.value.match('^[0-9]*$')){
      if(e.target.name=='principle'){
        setPrinciple(e.target.value)
        setIsPrinciple(true)
      }
      else if( e.target.name=='rate'){
        setRate(e.target.value)
        setIsRate(true)
      }
      else{
        setYear(e.target.value)
        setIsYear(true)
      }
    }
    else{
        if(e.target.name=='principle'){
          setPrinciple(e.target.value)
          setIsPrinciple(false)
        }
        else if( e.target.name=='rate'){
          setRate(e.target.value)
          setIsRate(false)
        }
        else{
          setYear(e.target.value)
          setIsYear(false)
        }
      

    }
    
    
  }


  const handleReset = ()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }

  const handleCalculate = ()=>{
    setInterest((Principle*rate*year)/100)
  }






  return (
    <>
    <div style={{height:'100vh'}} className='bg-dark d-flex justify-content-center align-items-center'>
      <div style={{width:'500px'}} className='p-5 bg-light rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate Your simple interest Easily</p>
        <div style={{height:'150px'}} className='bg-warning rounded d-flex justify-content-center align-items-center flex-column'>
          <h1>₹ {interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <div className='my-3'><TextField name='principle' id="outlined-basic" value={Principle} label="Principle amount" variant="outlined" className='w-100' onChange={(e)=>Validate(e)} />
          
          {!isPrinciple &&<span className='text-danger'>*invalid output</span>}
        </div>
        <div className='mb-3'><TextField name='rate' id="outlined-basic" value={rate} label="Rate of interest (p.a)" variant="outlined" className='w-100' onChange={(e)=>Validate(e)} />
          
        {!isRate &&<span className='text-danger'>*invalid output</span>}
        </div>
        <div className='mb-3'><TextField name='year' id="outlined-basic" value={year} label="year (yr)" variant="outlined" className='w-100' onChange={(e)=>Validate(e)} />
        {!isYear &&<span className='text-danger'>*invalid output</span>}
        </div>
        <div className='mb-3 d-flex justify-content-between'>
        <Button onClick={handleCalculate} style={{height:'60px', width:'190px'}} variant="contained" color='success'disabled={isPrinciple && isRate && isYear ? false:true}>CALCULATE</Button>
        <Button onClick={handleReset} style={{height:'60px', width:'190px'}} variant="outlined">RESET</Button>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
