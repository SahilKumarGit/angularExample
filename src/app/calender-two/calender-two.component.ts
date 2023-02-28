import { Component } from '@angular/core';
import { CalendarEvent, EventColor } from 'calendar-utils';
import * as moment from 'moment';
@Component({
  selector: 'app-calender-two',
  templateUrl: './calender-two.component.html',
  styleUrls: ['./calender-two.component.scss']
})
export class CalenderTwoComponent {

  viewDate = new Date();
  dayIsOpen = !true

  events: CalendarEvent[] = [{
    title: "Total Incom Rs 50,000",
    start: new Date("2023/02/27"),
    color: {
      primary: "#36a2ff ",
      secondary: 'gray',
      secondaryText: 'white'
    },
    draggable: false,
    id: "csddscscsc",
    meta: {},
    allDay: true,
    cssClass: 'ppi',

  },{
    title: "10 New Joinings",
    start: new Date("2023/02/27"),
    color: {
      primary: "#cb9700",
      secondary: 'white',
      secondaryText: 'white'
    },
    draggable: false,
    id: "csddscscsc",
    meta: {},
    allDay: true,
    cssClass: 'ppi',

  },{
    title: "2 new customers",
    start: new Date("2023/02/27"),
    color: {
      primary: "#339f64",
      secondary: 'gray',
      secondaryText: 'white'
    },
    draggable: false,
    id: "sx",
    meta: {},
    allDay: true,
    cssClass: 'ppi',

  },

]

  sliceArr(arr: any[], limit: number) {
    return arr.slice(0, limit);
  }

  rendorDone(...res: any) {
    console.log(res)
  }

  cactivDay(res: any) {
    const { date, events }: { date: Date; events: CalendarEvent[] } = res.day
    if (moment(date).isSame(this.viewDate, 'month')) {
      if (moment(date).isSame(this.viewDate, 'day') && this.dayIsOpen === true) {
        this.dayIsOpen = false;
      } else {
        this.dayIsOpen = true;
      }
      this.viewDate = date;
    }

    console.log({ date, events })
  }
}
