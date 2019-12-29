import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }
  confirm(message? : string) : boolean{
    const confirmation = window.confirm(message || 'Is this okay?');
    return confirmation;
  }
}
