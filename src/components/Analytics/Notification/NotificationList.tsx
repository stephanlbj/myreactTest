import Notificationcomponent from "./Notificationcomponent"
import { notifications } from "./data"

 






const NotificationList = () => {
  return (
    <div className='bg-white shadow-md w-fit px-7 my-10'>
         <div className="flex items-center space-x-2 my-4">
         <h2 className='text-[20px] text-black'>Notifications {' '}
         </h2>
         <p  className='text-white flex items-center justify-center bg-blue-300 rounded-full
          h-5 w-5 p-1 font-semibold '>6</p>
   
         </div>

        <div className="flex flex-col space-y-4 py-10">
        {
            notifications.map((notification, index)=>{
                return <Notificationcomponent key={index}
                 notification={notification}
                 />
            })
         }
        </div>
   </div>
  )
}

export default NotificationList