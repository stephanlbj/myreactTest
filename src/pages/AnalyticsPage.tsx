import AppApparence from "../components/Analytics/AppApparence"
import Calendar from "../components/Analytics/Calendar/Calendar"
import DoughnutChart from "../components/Analytics/DoughnutChart"
import { LinearChartComponent } from "../components/Analytics/LinearChartComponent"
import NotificationList from "../components/Analytics/Notification/NotificationList"
import ServerOverView from "../components/Analytics/ServerOverView"
import StatisticComponent from "../components/Analytics/Statistic/StatisticComponent"
import SupportRequestsTable from "../components/Analytics/Tables/SupportRequestsTable"
import TasksComponent from "../components/Analytics/Tasks/TasksComponent"
import VisitComponent from "../components/Analytics/VisitComponent"

 

const AnalyticsPage = () => {

    
  return (
    <div className="text-black">

        <p className="text-3xl mt-10 ml-10">Analytics</p>


       <section className=" p-5 mt-10 grid grid-cols-1 md:grid-cols-2 ml-10 mx-auto
       lg:grid-cols-4">
        <VisitComponent />
        <DoughnutChart/>
        <AppApparence />
        <ServerOverView />
       </section>
       

       <LinearChartComponent/>

       <StatisticComponent/>

       <SupportRequestsTable/>

       <section className="grid grid-cols-1 md:grid-cols-4 gap-10 ml-10 mx-auto">
       
       <div className="col-span-2">
       <Calendar/>
        </div>
        <div className="col-span-2 ">
        <TasksComponent/>
        </div>

       
        </section>

       <NotificationList/>
    </div>
  )
}

export default AnalyticsPage