import {AiOutlineSetting, RiArrowDownSLine} from "../../Icons/index"

const RightSideHeader = () => {
  return (
    <div className='text-gray-700 flex items-center space-x-3'>
        <img
        src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
         height={40}
         width={40}
         alt="profile photo"
        />
        <div className="flex items-center space-x-3">
        <p>Admin</p>
        <p className='bg-red-500 h-5 w-5 flex items-center justify-center
         rounded-full text-[14px] text-white p-2 font-bold
        '>13</p>
        </div>
        <RiArrowDownSLine/> 
       <div className="">
       <AiOutlineSetting/> 
       </div>
        
    </div>
  )
}

export default RightSideHeader