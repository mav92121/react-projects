import React, { useCallback, useEffect, useState } from 'react'
import "../styles/Pass.css"
const PasswordGenerator = () => 
{
    const [len,setLen]=useState(8);
    const [characters,setCharacters]=useState(false);
    const [numbers,setNumbers]=useState(false);
    const [pass,setPass]=useState("");
    
    const updatePassword=()=>
    {
        let passowrd="";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numbers)
        {
        str+="0123456789";
        }
        if(characters)
        {
            str+="!@#$%^&*(){}";
        }
        console.log(len);
        for(let i=1;i<=len;i++)
        {
            let currInd=Math.floor(Math.random()*(str.length));
            let currString=str[currInd];
            passowrd+=currString;
        }
        setPass(passowrd);
    }

    useEffect(updatePassword,[len,characters,numbers]);
  return (
    <>
    <div className="main">
        <div className="cointainer">
            <p id="heading">
                Password Generator
            </p>
            <div className="upper">
                <input id='target' type="text" readOnly value={pass}/>
                <button className='copyButton' onClick={()=>
                {   
                    let copyText=document.querySelector('#target');
                    copyText.select();
                    document.execCommand("copy");
                }}>Copy</button>
            </div>
            <br />
            <div className="bottom">
                <input id='slider' type="range" min='8' value={len} max='20' onChange={(e)=>
                {
                    setLen(parseInt(e.target.value));
                }}/>
                Length ({len})
                <span>Number :</span>
                <input type="checkbox" className='check' onChange={()=>
                {
                    setNumbers(!numbers)
                }} />
                <span>Characters :</span>
                <input type="checkbox" className='check' onChange={()=>
                {
                    setCharacters(!characters)
                }}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default PasswordGenerator