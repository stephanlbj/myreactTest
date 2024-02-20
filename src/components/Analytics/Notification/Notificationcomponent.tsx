import { notificationType } from "."


const Notificationcomponent = ({notification}:{notification: notificationType}) => {
  return (
    <div className="flex items-center space-x-3"
    
    >
       <div className={`${notification.color} `}>
       <notification.Icon/>
       </div>
      <p>{notification.label}</p>
    </div>
  )
}

export default Notificationcomponent