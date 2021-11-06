import React,  { Component } from "react";

class MyComponent extends Component {
    /* 반드시 컴포넌트를 상속 받아야 함  */
    render() {
        const component_name = 'MyComponent 입니다.';

        return (
            /* div 밑에는 실제 DOM 임 실제 DOM을 읽어와서 가상 DOM에 집어 넣음  */
            
            <div>
               컴포넌트명:  {component_name} 
            </div>    

        );     
    }
}

/* 이런 식으로 export 해주는게 기본임 */
export default MyComponent;



























