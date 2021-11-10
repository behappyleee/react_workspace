import React from 'react'
import DisNum from '../components/DisNum';

function DisNumRoot(props) {
    return (
        <div>
            <h1> DisplayRoot !</h1>
            <DisNum number={ props.number}> </DisNum>     
        </div>
    )
}

export default DisNumRoot
