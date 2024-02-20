
import { labels } from '../../../data/dummyData'
import LabelItem from './LabelItem'

const LabelList = () => {


  return (
    <div className='px-6 flex flex-col space-y-4'>
           <h2 className="my-4 text-gray-400 text-[12px] font-bold">
           LABELS</h2>
       
       {
        labels.map((label , index)=>{
            return <LabelItem key={index} label={label}/>
        })
       }
       
    </div>
  )
}

export default LabelList