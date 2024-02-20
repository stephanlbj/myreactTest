import { useSideBarContext } from "../../Context/SidebarContext"
import { HiOutlineSwitchHorizontal, IoMdMenu, RxCross2 } from "../../Icons/index"

const LeftSideHeader = () => {

  const {toggleMenu} = useSideBarContext()
  return (
    <div className='text-gray-700 flex items-center space-x-3'>
      <div onClick={toggleMenu} className="cursor-pointer">
      <IoMdMenu/>
      </div>
       
        <HiOutlineSwitchHorizontal/>
        <RxCross2/>
    </div>
  )
}

export default LeftSideHeader