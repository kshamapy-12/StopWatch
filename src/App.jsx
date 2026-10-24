import React, { useEffect, useRef, useState } from 'react'
import DisplayWatch from './Components/DisplayWatch'
import WatchBtns from './Components/WatchBtns';

const App = () => {

const pad = (n) => String(n).padStart(2, '0');

const [seconds, setSeconds] = useState(0);
const [isRunning, setIsRunning] = useState(false);

useEffect(function(){
if(!isRunning) return;

const startTime = setInterval(function(){
  setSeconds((s) => s + 1);
  setIsRunning(true);
}, 1000)

return () => {
  clearInterval(startTime);
  setIsRunning(false);
}

}, [isRunning])


const hrs = Math.floor(seconds / 3600);
const mins = Math.floor((seconds % 3600) / 60);
const secs = Math.floor(seconds % 60);


  return (
    <div className='bg-slate-400 min-h-screen w-full flex flex-col gap-8 justify-center items-center'>
      <DisplayWatch hrs={hrs} mins={mins} secs={secs} pad={pad} />
      <WatchBtns setIsRunning={setIsRunning} setSeconds={setSeconds}/>
    </div>
  )
}

export default App
