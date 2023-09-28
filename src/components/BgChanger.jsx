import React, { useState } from 'react'
const BgChanger = () => {
  const [color,setColor]=useState('black');
  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
        <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <button className=' outline-none px-4 rounded-full text-white' onClick={()=>setColor("red")}>red</button>
          <button className=' outline-none px-4 rounded-full text-white' onClick={()=>setColor("green")}>green</button>
          <button className=' outline-none px-4 rounded-full text-white' onClick={()=>setColor("blue")}>blue</button>
        </div>
    </div>
  )
}

export default BgChanger