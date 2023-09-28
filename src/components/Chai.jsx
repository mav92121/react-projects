import React, { useState } from 'react'

const Chai = () => {
  const [val,setVal]=useState(5);
  const incr=()=>
  {
    setVal(val+1);
  }
  const decr=()=>
  {
    setVal(val-1);
  }
  return (
    <>
     {val}
     <br></br>
     <button onClick={incr}>INC</button>
     <button onClick={decr}>DEC</button>
    </>
  )
}

export default Chai