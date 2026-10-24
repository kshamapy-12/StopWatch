import React from 'react'

const DisplayWatch = (props) => {
    const { hrs, mins, secs, pad } = props
  return (
    <div className='bg-slate-900 w-120 h-120 rounded-full border-3 border-slate-300 flex items-center justify-center'>
    <h1 className='text-7xl text-white font-bold'>{pad(hrs)} : {pad(mins)} : {pad(secs)}</h1>
    </div>
  )
}

export default DisplayWatch
