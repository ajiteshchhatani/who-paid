import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Event } from '../event.model';
import { EventInfoService } from '../event-info.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  private formSubmitted = false;
  private eventForm: FormGroup;
  private newEvent: Event = {
    eventName: null,
    participants: null,
    cost: null,
    paidBy: null
  };
  constructor(private formBuilder: FormBuilder, private eventInfo: EventInfoService, private dialogService: DialogService, private router: Router) {}

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      event: ['', Validators.required],
      participants: this.formBuilder.array([
        this.formBuilder.control('', Validators.required)
      ]),
      totalcost: ['', Validators.required],
      paidby: ['', Validators.required]
    });
    this.formSubmitted = false;
  }

  get participants(){
    return this.eventForm.get('participants') as FormArray
  }

  addParticipants(){
    this.participants.push(this.formBuilder.control(''));
  }

  submitEventDetails(){
    this.newEvent.eventName = this.eventForm.get('event').value;
    this.newEvent.participants = this.eventForm.get('participants').value;
    this.newEvent.cost = +this.eventForm.get('totalcost').value;
    this.newEvent.paidBy = this.eventForm.get('paidby').value;

    this.eventInfo.postEventInfo(this.newEvent);
    this.formSubmitted = true;
    this.eventForm.reset();
  }

  goToViewEvents(){
    this.router.navigate(['view-events']);
  }

  canDeactivate(): Observable<boolean> | boolean{
    console.log('i am navigating away');
    if(this.eventForm.untouched){
      return true;
    }
    else{
      return this.dialogService.confirm('Do you want to discard your changes');
    }
  }

}
