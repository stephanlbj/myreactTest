import { statisticType } from "../../../@types"
import { RxCross2 , MdArrowOutward, HiArrowDownRight} from "../../../Icons/index"

type propsType = {
    stat: statisticType
    index: number
}
const StatisticItemComponent = ({stat, index}: propsType) => {
  return (
    <div className="rounded-md border 
    border-gray-100 h-60 w-full flex flex-col space-y-5 p-2 ">

     <div className="flex items-center justify-between">
     <p className="text-black">{stat.label}</p>
     <div className="text-gray-400">
     <RxCross2/>
     </div>
     </div>

<div className="flex items-center mt-4 justify-between">
<p className="text-black font-semibold text-2xl">{stat.qty}</p>
</div>

<p className="h-[1px] w-full bg-gray-300"></p>
    
<div className="flex items-center justify-between text-black">

   <div className="flex space-x-2 items-center">
   <p>{stat.registration_number}</p>
    <div className="text-green-400 text-2xl">
     <MdArrowOutward className=" "  />
     </div>
   </div>


   <div className="flex space-x-2 items-center">
    {
        index !== 1 ? (
            <div className="text-red-500 text-2xl">
            <HiArrowDownRight   />
            </div>
        ) : (
            <div className="text-green-400 text-2xl">
            <MdArrowOutward className=" "  />
            </div>
        )
    }
   
     <p>{stat.rateNum}</p>
   </div>

   
    </div>

    <div className="flex items-center justify-between text-gray-400">
    <p>{stat.Registrations}</p>
     <p>{stat.rate}</p>
    </div>
    </div>
  )
}

export default StatisticItemComponent