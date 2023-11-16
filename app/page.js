"use client"
import React, { useState } from 'react'
import { render } from 'react-dom'

const page = () => {
  const [title,settitle] = useState("");
  const[desc, setdesc] = useState("");
  const[MainTask,setMainTask] = useState([]);

  const SubmitHandler = (e) =>{
    e.preventDefault()
    setMainTask([...MainTask,{title,desc}]);
    settitle("");
    setdesc("");
    console.log(MainTask);
  }
  const deleteHandler = (i)=>{
    let copyTask = [...MainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderTask = <h2 className='font-semibold'>No Task Available</h2>
  if(MainTask.length>0){
    renderTask = MainTask.map((t,i) => {
      return(
        <li className='flex items-center justify-between mb-8'>
          <div className='flex justify-between mb-5 w-2/3 '>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
          </div>
          <button 
            onClick={() => {
              deleteHandler(i)
            }}
            className='text-lg bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete
          </button>
        </li>
      );
    }); 
  }
  return (
    <div>
      <h1 className='bg-black text-white p-5 text-5xl font-bold'>Saurin's To-Do List</h1>
      <form onSubmit={SubmitHandler}>
        <input 
          type='text'
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2 font-'
          placeholder='Enter Task'
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
        />
        <input 
          type='text'
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter Description'
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value)
          }}
        />
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button> 
      </form>
      <hr/>
      <div className='p-7 bg-slate-200 text-2xl'>
          <ul>
            {renderTask}
          </ul>
      </div>
    </div>
  )
}

export default page

