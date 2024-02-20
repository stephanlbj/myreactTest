
import { useSideBarContext } from "../../../Context/SidebarContext"


const LabelItem = ({label}:{label:string}) => {

  const {ismenuVisible} = useSideBarContext()


  return (
    <div className="flex space-x-4 items-center">
      <p className={`${label.includes("My") ? "bg-[#48C9B0]" : 
      label.includes("St") ?  "bg-[#16A085]" : "bg-[#C0392B]" } 
      h-2 w-2 rounded-full`}></p>
      {
        ismenuVisible &&   <p className="text-gray-500 text-[13px]">{label}</p>
      }
     
    </div>
  )
}

export default LabelItem