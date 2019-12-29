import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEventsComponent } from './add-events/add-events.component';
import { ViewEventsComponent } from './view-events/view-events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
  { path: 'add-events', component: AddEventsComponent, canDeactivate: [CanDeactivateGuard] },
  { 
    path: 'view-events', 
    component: ViewEventsComponent,
    children: [{
      path: ':id',
      component: EventDetailComponent
    }] 
  },
  { path: '', redirectTo: 'addEvents', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
