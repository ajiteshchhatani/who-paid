import { Component, OnInit } from '@angular/core';
import { EventInfoService } from '../event-info.service';

import { Event } from '../event.model';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  private eventList : Event[] = [];
  private chosenEvent: Event;
  private costPerHead = 0;
  /* private peopleWhoOwe;
  private peopleWhoPaid = ''; */
  private participants = {
    /* whoOwe : [],
    whoPaid : '' */
  };
  constructor(private eventInfo: EventInfoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventList = this.eventInfo.getEventsList();
    this.route.paramMap.subscribe(
      (params) => {
        this.eventList.forEach((e: Event) => {
          if(e.eventID == params.get('id')){
            this.chosenEvent = e;
          }
        });
    });
    this.costPerHead = this.splitTotalCost();
    this.participants = this.whoOwesWhom();
    console.log(this.participants);
  }

  splitTotalCost(){
    let costPerHead = 0;
    costPerHead = this.chosenEvent.cost / this.chosenEvent.participants.length;
    return costPerHead;
  }

  whoOwesWhom(){
    let participants = {
      whoOwe : [],
      whoPaid : ''
    };
    this.chosenEvent.participants.forEach( (p) => {
      if(p !== this.chosenEvent.paidBy){
        participants.whoOwe.push(p);
      }
      else{
        participants.whoPaid = p;
      }
    });
    return participants;
  }
}
