import Search from '../Search'
import LeftSideHeader from './LeftSideHeader'
import RightSideHeader from './RightSideHeader'

const Headercomponent = () => {
  return (
    <header className='w-full bg-white  border-b border-gray-200'>
 
     <div className='p-4 flex items-center 
    justify-between'>
        {/*Left side*/}
       <LeftSideHeader/>

        {/*middle side*/}

        <Search/>

        {/*right side*/}

        <RightSideHeader/>
     </div>
    </header>
  )
}

export default Headercomponent