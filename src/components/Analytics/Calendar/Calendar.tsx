import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function BasicDateCalendar() {

    const [value, onChange] = useState(new Date());

    const [date, changeDate] = useState(new Date());

    function changeValue(val:any) {
       changeDate(val);
    }
  return (
   
    
    <div className='h-52'>
        <Calendar onChange = {changeValue} value = {date} />
    </div>
  

  );
}