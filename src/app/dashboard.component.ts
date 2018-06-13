import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <h1>Dashboard</h1>
  <br>
  Current State: {{ loadState }}<br>
  <button type="button" (click)="changeLoadState()">Toggle Loading</button><br>
  <br>
  Change loading text: <input type="text" [(ngModel)]="loadState">

  `
})
export class DashboardComponent {
 loadState = 'loading';

 changeLoadState() {
   this.loadState = 'finished';
 }
}
