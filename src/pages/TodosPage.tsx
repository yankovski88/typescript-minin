import React from 'react'
import {ITodo} from "../interfaces";
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {

    const [todos, setTodos] = React.useState<ITodo[]>([]) // ITodo[] указали, что ITodo массив

    // забираем элементы
    React.useEffect(() => {
        const saved = JSON.parse(localStorage.getItem(`todos`) || `[]`) as ITodo[] // в локол сторедж получаем item todos // JSON.parse() начинаем парсить строку т.к. мы ждем массив
        // as ITodo указали к какому типу будет принадлежать массив
        setTodos(saved)
    }, [])

    React.useEffect(() => {
        localStorage.setItem(`todos`, JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false, // задача не выполнена
        }
        setTodos((prev) => [newTodo, ...prev]) // такая запись более корректная. prev реакт гарантирует, что это предыдущее состояние стейта
        // setTodos([newTodo, ...todos])
    }

    const toggleHandler = (id: number) => {
        setTodos(prev =>
            prev.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            }))
    }

    const removeHandler = (id: number) => {
        const shoudRemove = confirm(`Вы уверены, что хотите удалить элемент?`) // confirm() это встроенный метод
        if (shoudRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }

    }

    return (
        <>
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
        </>
    )
}
