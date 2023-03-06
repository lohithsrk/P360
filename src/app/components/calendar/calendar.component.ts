import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent implements OnInit {
  events: any = [
    {
      title: 'event1',
      date: '2023-03-06',
      color: '#f6f6',
      textColor: '#000000',
    },
    {
      title: 'event2',
      date: '2023-03-07',
      color: '#f6f6',
      textColor: '#000000',
    },
    {
      title: 'event2',
      date: '2023-03-10',
      color: '#f6f6',
      textColor: '#000000',
    },
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: this.events,
    eventClick: this.handleClick.bind(this),
    // dateClick: this.handleClick.bind(this),
  };

  handleClick(arg: any) {
    console.log(arg);
  }

  addEvent() {
    console.log('clicked');
    this.events = [
      ...this.events,
      {
        title: 'event3',
        date: '2023-03-08',
        color: '#f6f6',
        textColor: '#000000',
      },
    ];
    this.calendarOptions.events = this.events;
    console.log(this.events);
  }

  ngOnInit(): void {
    
    
  }
}
