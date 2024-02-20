import { createContext, useCallback, useContext, useState } from "react";


type initialState ={
    ismenuVisible: boolean
    toggleMenu: () => void
    
}

type SideBarCProviderProps = {
    children:React.ReactNode
 
}


export const SideBarContext = createContext( {} as initialState) 


export const SideBarContextProvider = ({children}:SideBarCProviderProps)=>{
    const [ismenuVisible, setismenuVisible]  = useState(true)

    const toggleMenu = useCallback(()=>{
        setismenuVisible((prev)=>!prev)
    },[setismenuVisible])

    return (
        <SideBarContext.Provider value={{ismenuVisible, toggleMenu}}>
            {children}
        </SideBarContext.Provider>
    )
}


export const useSideBarContext = ()=>useContext(SideBarContext)