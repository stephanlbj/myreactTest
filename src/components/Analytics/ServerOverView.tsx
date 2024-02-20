import { RxCross2 , MdArrowOutward} from "../../Icons/index"


const overview = ["60% / 37°С / 3.3 Ghz","54% / 31°С / 3.3 Ghz","54% / 31°С / 3.3 Ghz"]










const ServerOverView = () => {
  return (
     
     <div className="rounded-md border 
     border-gray-100 h-60 w-48 flex flex-col space-y-5 p-2">
 
      <div className="flex items-center justify-between">
      <p className="text-black">ServerOverView</p>
      <div className="text-gray-400">
      <RxCross2/>
      </div>
      </div>
 
      <div className="flex flex-col space-y-3">
    {
        overview.map((item ,index)=>{
            return <div className="flex items-center space-x-2" key={index}>
           <p className="text-[12px]"> {item}</p>
            </div>
        })
    }


       
    
  </div>
     
     </div>
     
  )
}

export default ServerOverView