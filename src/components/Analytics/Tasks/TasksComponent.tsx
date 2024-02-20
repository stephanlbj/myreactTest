
import Task from './Task'
import { tasks } from './data'


const TasksComponent = () => {
  return (
    <div className='bg-white shadow-md  flex flex-col space-y-4 py-5 px-10'>
        <div className='flex items-center justify-between '>
        Today's Tasks
        
        <p className='text-white h-4 w-4 flex items-center justify-center
        rounded-full p-1 bg-blue-300 font-bold'>4</p>
   
        </div>

        <p className='text-gray-400'>0 of 4 completed</p>


        {
            tasks.map((task, index)=>{
                return <Task key={index} 
                index={index}
                task={task}/>
            })
        }
    </div>
  )
}

export default TasksComponent