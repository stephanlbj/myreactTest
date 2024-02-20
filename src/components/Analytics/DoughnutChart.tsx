import { RxCross2 } from "../../Icons/index"

import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
Chart.defaults.plugins.legend.position = 'right';
Chart.defaults.plugins.legend.title.display = true;
Chart.defaults.plugins.legend.fullSize= false
//Chart.defaults.plugins.legend.title.text = '60 of 100 Done';
//Chart.defaults.plugins.legend.title.font = 'Helvetica Neue';

const data = {
    labels: [
      'SMX',
      'Direct',
      'Networks'
    ],
    datasets: [{
      data: [19,98, 33],
      backgroundColor: [
        '#EC7063',
        '#F5B041',
        '#5DADE2 '

      ],
      borderWidth: 2,
      radius: '40%'   
    }]
  };

const DoughnutChart = () => {
  return (
    <div className="rounded-md border 
    border-gray-100 h-60 w-48 flex flex-col space-y-5 p-2">
        
        
     <div className="flex items-center justify-between">
     <p className="text-black">DoughnutChart</p>
     <div className="text-gray-400">
     <RxCross2/>
     </div>
     </div>

     <div className="flex items-center">
     <Doughnut data={data} />
      
     </div>
        


    </div>
  )


}

export default DoughnutChart