import React from 'react'

const WatchBtns = (props) => {
    const { setIsRunning, setSeconds } = props;
  return (
    <div className='flex items-center justify-around gap-5'>
      <button 
      onClick={() => setIsRunning(true)}
      className='px-5 py-2 bg-gray-700 text-white font-medium rounded-3xl active:scale-95 text-lg'>Start</button>
      <button 
      onClick={() => setIsRunning(false)}
      className='px-5 py-2 bg-gray-700 text-white font-medium rounded-3xl active:scale-95 text-lg'>Stop</button>
      <button 
      onClick={() => {setIsRunning(false); setSeconds(0)}}
      className='px-5 py-2 bg-gray-700 text-white font-medium rounded-3xl active:scale-95 text-lg'>Reset</button>
    </div>
  )
}

export default WatchBtns
