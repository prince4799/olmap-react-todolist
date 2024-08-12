import { useState } from 'react';
import '../../styles/DailyGoals.css'


function DailyGoals() {
    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e: MouseEvent) => {
        e.preventDefault();
    }

    const addTasks = () => {
        if (title.length > 0 && description.length > 0)
            setTasks([...tasks, { title: title, description: description }])
        setTitle('')
        setDescription('')
    }

    const remove = (index: any) => {
        if (tasks.length > 0)
            {
               let temp_taks= tasks.filter((item,i)=>(i!==index))
                setTasks(temp_taks);
            }
    }

    return (
        <>
            <nav className="nav-bar">
                <h1>My Daily Goals Lists</h1>
            </nav>

            <div className='container' >
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} ></input>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <button type='submit' onClick={addTasks}>ADD</button>
                </form>
                {
                    tasks?.map((item, index) => <Tasks key={index.toString()} title={item.title} description={item.description} remove={remove} index={index}/>)
                }
                {/* <Tasks title="Test" description='test description' /> */}

            </div>
        </>
    )
}

export default DailyGoals;

interface TasksProps {
    title: string;
    description: string;
    remove:any;
    index:number;
}
export function Tasks({ title, description, remove, index }: TasksProps) {
    return (
        <div className='task-container'>
            <div>
                <p>{title}</p>
                <span>{description}</span>
            </div>
            <button  onClick={()=>remove(index)} >-</button>
        </div>
    )
}
