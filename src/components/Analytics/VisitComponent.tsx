import { visitsType } from "../../@types"
import { RxCross2 , MdArrowOutward} from "../../Icons/index"


const visits: visitsType[] = [
  {
      percentage:'+830',
      label:'Logins'
  },
  {
      percentage:'0.5%',
      label:'Sign Out'
  },
  {
      percentage:'4.5%',
      label:'Rate'
  },
]

const VisitComponent = () => {
  return (
    <div className="rounded-md border 
    border-gray-100 h-60 w-48 flex flex-col space-y-5 p-2 flex-wrap">

     <div className="flex items-center justify-between">
     <p className="text-black">Visits Todays</p>
     <div className="text-gray-400">
     <RxCross2/>
     </div>
     </div>

<div className="flex items-center mt-4 justify-between">
<p className="text-black  text-2xl">4.332</p>
<div className="text-green-400 text-3xl">
<MdArrowOutward className=" "  />
     </div>
    
  </div>

 <div className="flex items-center justify-between">
 {
    visits.map((visit, index)=>{
 return <div key={index} >
   <div className="flex flex-col space-y-3 items-center justify-center">
    <p>{visit.percentage}</p>
    <p>{visit.label}</p>
   </div>
 </div>
    })

  }
 </div>
    
    </div>
  )
}

export default VisitComponent