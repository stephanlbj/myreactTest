import React from 'react'
import { statistics } from './data'
import StatisticItemComponent from './StatisticItemComponent'

const StatisticComponent = () => {
  return (
    <div className="w-full my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 
    gap-10 ">

     {
        statistics.map((stat, index)=>{
            return <StatisticItemComponent key={index} 
            stat={stat} 
            index={index}/>
        })
     }
    </div>
  )
}

export default StatisticComponent