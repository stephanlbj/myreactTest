

import LabelList from "../labels/LabelList.tsx"
import SidebarMenu from "./SidebarMenu.tsx"
import { useSideBarContext } from "../../../Context/SidebarContext.tsx"


const Sidebar = () => {

   
  const {ismenuVisible} = useSideBarContext()
    

  return (
   <section className={`${!ismenuVisible && "w-[100px]"} bg-gray-200  overflow-y-auto 
   py-10  fixed left-0 top-0 bottom-0  h-full top-sticky`}>
     

    <section className=" flex flex-col 
    space-y-5 w-full">
    
    <h2 className="text-blue-400 px-6 text-center">SING APP</h2>
        
    <SidebarMenu/>
    
    <LabelList/>
 

   
    
   
    </section>

    </section>
  )
}

export default Sidebar