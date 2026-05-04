import { useCallback, useState } from 'react'

import './App.css'

import Task from "./components/Task.tsx";

type TaskType = {
    id: number;
    text: string;
};

function App() {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    console.log(`App rendered`);

    const deleteTask = useCallback((id: number) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }, []);

    const editTask = useCallback((id: number, text: string) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, text } : task
            )
        );
    }, []);

    const addTask = () => {
        const newTask: TaskType = {
            id: Date.now(),
            text: 'New task'
        };

        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    return (
        <div className={'field'}>
            <button className={'btn new'} onClick={addTask}>Add task</button>

            {tasks.map(task => (
                <Task
                    key={task.id}
                    id={task.id}
                    edit={editTask}
                    remove={deleteTask}
                >
                    {task.text}
                </Task>
            ))}
        </div>
    )
}

export default App