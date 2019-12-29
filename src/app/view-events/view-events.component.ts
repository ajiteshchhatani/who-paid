import { Component, OnInit } from '@angular/core';
import { EventInfoService } from '../event-info.service';
import { Event } from '../event.model';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {
  private eventList: Event[] = [];

  constructor(private eventInfo: EventInfoService) { }

  ngOnInit() {
    this.eventList = this.eventInfo.getEventsList();
  }
}
