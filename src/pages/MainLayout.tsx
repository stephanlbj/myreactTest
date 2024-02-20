import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar/Dashbord/Sidebar"
import Headercomponent from "../components/Header/Headercomponent"
import { useSideBarContext } from "../Context/SidebarContext"


const MainLayout = () => {

  const {ismenuVisible} = useSideBarContext()
  return (
    <section className="w-full ">
        

    <div className="flex  w-full relative">
           {/*sidebar component*/}
           <div className={` ${ismenuVisible ? " w-2/12" : "w-[50px]" } top-sticky `}>
      <Sidebar/>
      </div>
       
      

         <main className={` ${ismenuVisible ? " w-10/12" : "w-11/12 ml-14" }`}>

           {/*header component*/}
 
           <Headercomponent/>
        <div className={` ${ismenuVisible ? " w-11/12" : "ml-14" } p-8`}>
        
        <Outlet/>
        </div>
         </main>
    </div>

                
         
    </section>
  )
}

export default MainLayout