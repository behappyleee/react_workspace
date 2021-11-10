import React from 'react'
import { useSelector , useDispatch} from 'react-redux';
import './App.css';
import LandingPage from './components/LandingPage';
import TodoList  from './components/TodoList';
import AddRoot from './components/AddRoot';
import DisNumRoot from './components/DisNumRoot';

// state 를 도입하기 위하여서는 


function App() {

  // state 가져오기 (state 그냥 꺼내오면 됨)
  // state 상태관리도 용이 
  const getWeight = useSelector( (state) => state );
  const dispatch = useDispatch();

  const state = {number : 0 };

  return (
    <div className="App">
        { getWeight }
        <button onClick={() => {dispatch({type:'증가'}) }}> 더하기 </button>
        <button onClick={() => {dispatch({type:'감소'}) }}> 빼기 </button>
        <h1> Root </h1>
        <AddRoot></AddRoot>
        <DisNumRoot number={state.number}></DisNumRoot>
        <LandingPage />
        <TodoList />
    </div>
  );
}

export default App;
