import { useCallback, useMemo, useState } from "react"
import { isSubVisibleProps } from "../../../@types"
import { sideMenu } from "../../../data/dummyData"
import SideSubItem from "./SideSubItem"
import SideMainItem from "./SideMainItem";

const SidebarMenu = () => {

    const [isShown,  setisShown] = useState<isSubVisibleProps>({
        visible:false,
        name:""
    })
    

    const isVisible = useMemo(()=>isShown,[isShown])

    const showSubmenu = useCallback((name:string)=>{

      setisShown((prev)=>{
          if(prev.name===""){
            return  {name, visible:true} 
          }
          else if(prev.name.trim()===name.trim()){
              return  {name, visible:!prev.visible} 
          }
          else if(prev.name.trim()!==name.trim()){
            return  {name, visible:true} 
        }
       else{
          return {name, visible:!prev.visible} 
       }
       
      })
  },[setisShown])

  return(
    <>

    <div className="flex flex-col space-y-9">
    {
    sideMenu.map((item, index)=>{
      return <div key={index}>

          <h2 className="px-6 my-4 text-gray-400 text-[12px] font-bold">{item.title}</h2>
        {
          item.children.map((submenu, subindex)=>{
            return <div key={subindex}>
             
            <SideMainItem 
            item={submenu} 
            index={index}
            clickItem={showSubmenu}
            show={isVisible}/>

          {/*Submenu*/}


          {
               submenu.subItem  ? (

                <section className={`${isShown.name===submenu.name && isShown.visible ? "flex":"hidden"} flex flex-col space-y-2 items-center
                 justify-center bg-gray-100 w-full p-5`}>
           
            {  
                 submenu.subItem.map((subItem, ind)=>{
                   return  <SideSubItem key={ind} 
                   item={subItem}/>
                 }) 
             }
   
         </section>
               ) : <span></span>
          }

            </div>


         

          })
        }

      </div>
    })
  }
    </div>
    
    </>
  )

}

export default SidebarMenu