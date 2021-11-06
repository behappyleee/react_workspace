
import './App.css';
import {Fragment} from 'react';

function App() {
  const name='테스트';
  const tel = undefined;
  const number=0;
  return (
   <Fragment>
    
    {/* 2.자바스크립트 표현식 을 작성하려면 {}로 감싸야 한다.*/ } 
     
      <h3>{name} 안녕 ? </h3>
      <h3> 잘 작동하고 있니 ? </h3>

      { name === '이름' ? (
          <h3> 이름 입니다</h3>
      ) : (
        <h3> 이름 아닙니다. </h3>
      )}

        { /* 4) AND 연산자(&&)를 사용한 조건부 렌더링 => null을 렌더링하면 아무것도 보여지지 않는다. 
            리액트에서 false 를 렌더링 할 떄는 null 과 마찬가지로 아무것도 보여지지 않는다.  리액트에서 false 렌더링 시에는 아무것도 반환하지 않는다.
        */ }
        
        { name==='테스트2' ? <h3> 테스트 입니다.  </h3> : null} { /* null 을 렌더링 */ }
        { name==='테스트2' && <h3> 테스트 입니다. </h3> }  { /* false 를 렌더링 조건이 && 참이면 뒤에 결과가 실행된다. false를 렌더링 하므로 결과가 없음*/ }
        { number && <div> <h3> 숫자 테스트~~ </h3></div>} {/* 결과 :0 => 정수형인경우 falsy한 값은 0은 예외적으로 화면에 나온다. */}
        { /* 0이 아닌 경우는 모두 참으로 생각 */ }  
          <br></br>
         { /* 5. undefined를 렌더링 하지 않기 ==>  OR(||) 연산자를 사용하면 값이 undefined 일때 사용 할 값을 지정 가능  */ } 
         
         {tel  || <h3> '010-1111-2222' </h3> } {/* undefined일 경우 || 뒤의 값으로 대체 */}

         {/* 6) 인라인 스타일링 
          리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어 주여야 한다.
          '-' 문자를 없애고 카멜표기법으로 표시를 한다.
          예) background-color:'aqua';  ==> backgroundColor:'aqua';
         */ } 
        <div
           style={{
           backgroundColor: 'aqua', 
           color: 'gray',
           fontSize: '30px',
           fontWeight:'bold',
           padding:'15px'   
         }}
        
        >
          {name}
          {/* 단위 생략하면 px로 지정됨  */}

        </div> {/* 자체 css 적용 */}
        
      {/* 7) class 대신 className 일반 HTML에서 css 클래스를 사용할 떄는 
      <div class='클래스명' </div>
      리액트에서는 <div className="클래스명"></div>
      */}

      <div className="react">
        {name} {/* import 한 App.css를 읽음 App.css에 스타일을 이미 적용 하였음*/}
      </div>

      {/* 8) 꼭 닫아야 하는 태그 - input*/}
      <input />  
      <input></input>
      

    
   </Fragment>
  );
}

export default App;
