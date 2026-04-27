import { useState } from 'react'
import './App.css'
import Task from "./components/Task.tsx";

function App() {
    const [tasks, setTasks] = useState<string[]>([]);

    console.log(`App rendered`)

    const deleteTask = (index: number) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    const editTask = (index: number, text: string) => {
        const newTasks = [...tasks];
        newTasks[index] = text;
        setTasks(newTasks);
    }

    const addTask = () => {
        setTasks([...tasks, 'New task']);
    }

    return (
        <div className={'field'}>
            <button className={'btn new'} onClick={addTask}>Add task</button>
            {tasks.map((t, i) => <Task key={i + 1} index={i} edit={editTask} remove={deleteTask}>{t}</Task>)}
        </div>
    )
}

export default App
