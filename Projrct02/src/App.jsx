import { useState } from 'react';
import './App.css'

function App() {

let [counter, setCounter] = useState(15)


//let counter = 15 ;
 function addValue(){
  if(counter < 30){
    setCounter(counter+1)
   }
   else{
      alert("value is under 30 ")
   }
}
function removueValue(){
   if(counter > 0){
    setCounter(counter-1)
   }
   else{
      alert("value is zero and -Ve Not use ")
   }
}
  return (
    <>
      <h1> Piyush Shrama</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value  {counter}</button>
      <br /> 
      <button 
      onClick={removueValue}>Remove Value  {counter}</button>     
      <p> {counter}</p>
    </>
  )
}

export default App

/*  export function App() {
 let [length,setLength] = useState(8)
 let [numberAllow ,setNumber] = useState(false);
 let [charAllow, setcharAllow] = useState(false);
 let [password, setPassword] = useState("")

 let passwordGenrator = useCallback(() => {
  let pass=""
  let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklimnopqrstuvwxyz"
  if(numberAllow){
    str+="0123456789"
  }
  if(charAllow){
    str+="!@#$%^&*()"
  }
  for (let i = 1;i<Array.length;i++){
    let char = Math.ceil(Math.random*str.length + 1)
     pass = str.charAt(char)
  }
  setPassword(pass)

 },[length,numberAllow,charAllow,setPassword])
 
 return (
    <>
      {<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gra\'>
      Test</div>  }
      <h1 >Piush Sharma </h1>
      </>
    )
  } */