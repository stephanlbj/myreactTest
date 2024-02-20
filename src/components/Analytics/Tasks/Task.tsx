import React from 'react'
import { taskType } from '.'



type taskProps ={
    index:number 
    task: taskType
}
const Task = ({task, index}:taskProps) => {
  return (
    <div className='flex items-center text-gray-500'>
        <input type='checkbox'/>
        <div
        className='flex flex-col space-y-2'>
            <p>{task.label}</p>
            <p className='text-black'>{task.task}</p>
            <p>{task.time}</p>
        </div>
    </div>
  )
}

export default Task