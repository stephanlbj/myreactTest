import { RxCross2 , MdArrowOutward} from "../../Icons/index"

const period = [
    "This Period",
    "Last Period"
]


const SDK_Integration = [
    {
        title:"SDK"
    },
    {
        title:"Integration"
    }
]

const AppApparence = () => {
  return (
    <div className="rounded-md border 
    border-gray-100 h-60 w-48 flex flex-col space-y-5 p-2">

     <div className="flex items-center justify-between">
     <p className="text-black">App Performance</p>
     <div className="text-gray-400">
     <RxCross2/>
     </div>
     </div>

<div className="flex flex-col space-y-3">
    {
        period.map((item ,index)=>{
            return <div className="flex items-center space-x-2" key={index}>
           <p className={`${index === 0 ? "bg-red-500" : "bg-blue-300"}
             h-2 w-2 rounded-full `}></p>  <p className="text-[12px]"> {item}</p>
            </div>
        })
    }

    {
        SDK_Integration.map((item ,index)=>{
            return <div className="flex flex-col space-y-3" key={index}>
          <p className="text-[12px]"> {item.title}</p>
 
          <div className="relative">
           <p className="relative bg-gray-400 h-[3px] w-12/12 mx-auto"></p>
           <p className={`${index===0 ? " w-6/12 bg-blue-500" : "w-4/12 bg-blue-500"} absolute  h-[3px] 
           top-0`}></p>
        </div>
        <div className="relative">
           <p className="relative bg-gray-400 h-[3px] w-12/12 mx-auto"></p>
           <p className={`${index==1 ? " w-6/12 bg-red-500" : "w-3/12 bg-red-500"} absolute  h-[3px] 
           top-0`}></p>
        </div>


            </div>
        })
    }

       
    
  </div>
    
    </div>
  )
}

export default AppApparence