import React, {useState} from 'react'

function Add() {
    const [size, setSize] = useState(0);
    const onIncrease= () => {
        setSize(e => e + 1 )
    } 
    const increaseStep = () => {
        setSize('dont Click');
    }
    return (
        <div>
            <h1> Add Number </h1>
            <input type="button" value="+" onClick={ increaseStep }></input>
            <input type="text" value={size} onChange={onIncrease}></input>
        </div>
    )
}


export default Add;