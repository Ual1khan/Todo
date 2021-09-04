import React, { useState } from 'react';
import {Todo} from '../../shared/todo';

import styles from './TodoItem.module.scss';

interface Props{
    todo: Todo;
}

const TodoItem: React.FunctionComponent<Props> = (props:Props) => {
    const {todo} = props
    const [todoItem, setTodoItem] = useState(todo);
    const onCheck = () => { 
        setTodoItem({...todoItem, done : !todoItem.done});
    };

    return <div className={`${todoItem.done ? styles.todo_done : null} ${styles.todo_item}`}><input checked={todoItem.done} onChange={onCheck} type="checkbox" />{todoItem.text}</div>
}

export default TodoItem;
