import { useCallback, useState } from 'react'

import './App.css'

import Task from "./components/Task.tsx";

function App() {
    const [tasks, setTasks] = useState<string[]>([]);

    console.log(`App rendered`);

    const deleteTask = useCallback((index: number) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }, []);

    const editTask = useCallback((index: number, text: string) => {
        setTasks(prevTasks =>
            prevTasks.map((task, i) => i === index ? text : task)
        );
    }, []);

    const addTask = () => {
        setTasks(prevTasks => [...prevTasks, 'New task']);
    };

    return (
        <div className={'field'}>
            <button className={'btn new'} onClick={addTask}>Add task</button>

            {tasks.map((t, i) => (
                <Task
                    key={i}
                    index={i}
                    edit={editTask}
                    remove={deleteTask}
                >
                    {t}
                </Task>
            ))}
        </div>
    )
}

export default App