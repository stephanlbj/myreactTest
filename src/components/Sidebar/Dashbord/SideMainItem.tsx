
import { isSubVisibleProps, menuItemProps } from "../../../@types"
import { RiArrowLeftSLine, RiArrowDownSLine } from "../../../Icons/index";
import { useSideBarContext } from "../../../Context/SidebarContext";



type sideMainProps = {
    item: menuItemProps
    index:number
    clickItem: (name: string) => void
    show: isSubVisibleProps
}


const SideMainItem = ({item,  clickItem, show}:sideMainProps) => {

  const {ismenuVisible} = useSideBarContext()

  return (
    <div 
    onClick={()=>clickItem(item.name)}
    className=" flex justify-between space-x-7 
    items-center px-6 my-4 cursor-pointer hover:bg-gray-300">
  
  <div className="relative flex space-x-2  items-center ">
  {item.Icon && (
        <div className={`${item.name==="Dashboard" ?
         "bg-[#5DADE2] p-1 rounded-full" :"text-gray-500"}`}>
        <item.Icon/>
    </div>
    )}

 {
  ismenuVisible ? (
    <h2 className={`${item.name==="Dashboard" ?"font-semibold":""}  text-gray-700 text-center`}>
    {item.name} 
   
</h2>
  ) : null
 }
    
    
    </div>



    
           {/*Arrow */}

           {
  ismenuVisible ? (
    item.subItem && ( show.name === item.name && show.visible ? (
      <div className="text-gray-600 ">
           <RiArrowDownSLine />
      </div>
  ) :
           <div className="text-gray-600 "><RiArrowLeftSLine /></div>
  )
  ) : null
 }
 
 {
  ismenuVisible && (
    item.name === "Email" && (
      <span className="bg-[#E74C3C] flex items-center justify-center p-1
      rounded-full h-5 w-5 text-[12px] text-gray-600 font-bold">
      9</span>
      
      )
  ) 
  
 }


{
  ismenuVisible && (
    item.name==="Documentation" && 
    <span className="text-[#48C9B0] text-[12px] font-semibold
     absolute right-7 -mt-2">new</span>
  ) 
  
 }
 


 
    
    </div>
  )
}

export default SideMainItem