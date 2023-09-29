import React, { useEffect, useState } from 'react'
import "../styles/Currency.css"

let currency="usd";
let url=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

let response= await fetch(url);
let data= await response.json();
let keys=Object.keys(data[currency]);
// console.log(keys);


const CurrencyConverter = () => 
{
  const [from,setFrom]=useState('usd');
  const [to,setTo]=useState('inr');
  const [ans,setAns]=useState(0);
  const [inputVal,setInputVal]=useState(0);
  const [flag,setFlag]=useState(true);

  async function calcAns()
  {
    let curr=from;
    let url=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${curr}.json`;
    let response=await fetch(url);
    let data=await response.json();
    let value=data[curr][to];
    let temp=(value*inputVal).toFixed(2);
    setAns(temp)
    
  }
  useEffect(()=>
  {
    if(flag)setFlag(false);
    else calcAns();
  },[to,from,inputVal]);

  return (
    <div id="mainOuter">
        <div className="outerBox">
          <h1 id='heading'>Currency Converter</h1>
          <div className="card">
            <div className="upperPart">
              <p>From</p>
              <p>Currency Type</p>
            </div>
            <div className="lowerPart">
                <input type="number" id="input" value={inputVal} onChange={(e)=>
                {
                  setInputVal(e.target.value);
                  // console.log(from, to , inputVal);
                }}/>
                <select name="" id="options" value={from} onChange={(e)=>
                {
                  setFrom(e.target.value);
                  // console.log(from, to , inputVal);
                }}>
                  {
                    keys.map((curr,i)=>
                    (
                      i==0?null:
                      <option value={curr}>{curr}</option>
                    ))
                  }
                </select>
            </div>
          </div>
          <button id='swapButton' onClick={()=>
          {
            let temp1=to;
            let temp2=from;
            setTo(from);
            setFrom(to);
          }}>Swap</button>
          <div className="card">
            <div className="upperPart">
              <p>To</p>
              <p>Currency Type</p>
            </div>
            <div className="lowerPart">
                <input type="number" id="input" readOnly value={ans}/>
                <select name="" id="options" value={to} onChange={(e)=>
                {
                  setTo(e.target.value);
                  // console.log(from, to , inputVal);
                }}>
                  {
                    keys.map((curr,i)=>
                    (
                      i==0?null:
                      <option value={curr}>{curr}</option>
                    ))
                  }
                </select>
            </div>
          </div>
          {/* <button id="convertButton" onClick={calcAns}>Convert INR to USD</button> */}
        </div>
    </div>
  )
}

export default CurrencyConverter

