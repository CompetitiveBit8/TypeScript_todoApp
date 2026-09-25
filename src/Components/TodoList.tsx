import './style.css'
import type { Todo } from '../model';
import SingleTodo from "./SingleTodo";
import { useDroppable } from '@dnd-kit/react';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className='container'>
        {/* <useDroppable */}
        <div className='todos'>
            <span className='todos__heading'>Active</span>
            {
                todos.map((todo)=>(
                    !todo.isDone ?
                    <SingleTodo 
                    todo={todo}
                    todos={todos}
                    key={todo.id}
                    setTodos={setTodos}
                    />
                    :
                    null
                ))
            }
        </div>
        <div className='todos remove'>
            <span className='todos__heading'>Completed</span>
            {
                todos.map((todo)=>(
                    todo.isDone ?
                    <SingleTodo 
                        todo={todo}
                        todos={todos}
                        key={todo.id}
                        setTodos={setTodos}
                     />
                     :
                     null
                ))
            }
        </div>
    </div>
  )
}

export default TodoList 




{/* <div className='todos'>
        {
            todos.map((todo)=>(
                <SingleTodo 
                    todo={todo} 
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))
        }
    </div> */}