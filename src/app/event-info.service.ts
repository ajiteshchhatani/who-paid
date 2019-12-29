import { Injectable } from '@angular/core';
import { Event } from './event.model'

@Injectable({
  providedIn: 'root'
})
export class EventInfoService {

  private eventList : Event[] = [{
    eventID: '1',
    eventName: 'Test',
    participants: ["abc" , "xyz"],
    cost: 100,
    paidBy: "abc"
  }]

  public url = "./event-data.json";
  constructor() { }

  postEventInfo(event: Event){
    event.eventID = this.generateEventID();
    this.eventList.push(event);
    console.log(this.eventList);
    //this.http.post(this.url, event);
  }

  generateEventID(){
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  getEventsList(){
    return this.eventList;
  }
}
