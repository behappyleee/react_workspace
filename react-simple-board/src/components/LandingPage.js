import React from 'react'
import Student from '../json/jsonData';
import JsonType from '../json/jsonType';

function LandingPage() {
    console.log(Student);   // Array 로 가져옴
    console.log(JsonType);  // Object 로 가져옴
    console.log(JsonType.class_01);  // Array 로 가져옴
    const a = 5;
    const data = Student;
    const jsonType = JsonType;
    
    const forEachStyle = data.forEach((number) => {
        console.log('forEach 출력 ! ', number);
    });

    const item = data.map((number) => {
        // console.log(number);
        // console.log('String 화', number.toString()); [Object object] 출력
        <li>{number}</li>
    })
    const type = jsonType.class_01.map((number) => {
        console.log(number);
    })

    const filterTest = (test) => {
        return 
    }


    return (
        <div>
            { a }
            <ul>
                { item }
            </ul>
        </div>
    )
}

export default LandingPage



