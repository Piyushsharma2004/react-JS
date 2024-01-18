import { useState ,useCallback,useEffect, useRef} from 'react'


export function App() {
 let [length,setLength] = useState(8)
 let [numberAllow ,setNumberAllow] = useState(false);
 let [charAllow, setcharAllow] = useState(false);
let [password, setPassword] = useState("")
//useRef hook
const passwordRef = useRef(null)

 const passwordGenrator = useCallback(() => {
  let pass="";
  let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklimnopqrstuvwxyz";
  if(numberAllow){
    str+="0123456789";
  }
  if(charAllow){
    str+="!@#$%^&*()";
  }
  for (let i = 1;i<=length;i++){
    let char = Math.ceil(Math.random()* str.length + 1);
     pass += str.charAt(char);
  }
  setPassword(pass);

 },[length,numberAllow,charAllow,setPassword]);

 let copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,50);
  window.navigator.clipboard.writeText(password)
 },[password])
useEffect (() => {
  passwordGenrator();
}, [length, numberAllow, charAllow, passwordGenrator])
 
 return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Genrater</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4' >
          <input type="text"
                 value={password}
                 className='outline-none w-full py-1 px-3 '
                 placeholder='Password'
                 readOnly
                 ref={passwordRef}
          />

          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={50}
           
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            /> 
            <label >length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={numberAllow} id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }} />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className='flex items-center gap-x-1' >
              <input type="checkbox" defaultChecked={charAllow} id="charInput"
              onChange={() => {
                setcharAllow((prev) => !prev);
              }} />
              <label htmlFor="charInput">Character</label>

            </div>
        </div>
      </div>  
      
    </>
  )
}

export default App
