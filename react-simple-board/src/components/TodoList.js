import React from 'react'
import Todo from '../json/TodoJson';

function TodoList() {
    
    console.log(Todo.Todo);
    
    return (
        <div>
            <ul>
                <li>{ Todo.Todo.map((todo) => (todo.writer)) }</li>
            </ul>
        </div>
    )
}

export default TodoList




