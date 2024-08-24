import {Calendar, dayjsLocalizer} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from 'dayjs';



export const CalendarView = () => {
  const localizer = dayjsLocalizer(dayjs);

  const events= [
    {
      start: dayjs('2024-12-18t12:00:00').toDate(),
      end: dayjs('2024-12-18t13:00:00').toDate(),
      title: "turno oblea"
    }
  ]
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        style={{
          height:500,
          width:500
        }}
      />
    </div>
  )
}
