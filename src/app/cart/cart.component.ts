import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
  <input [(ngModel)]="newItem" type="text">
  <button type="button" class="btn"
    [ngClass]="{'btn-primary': newItem != '', 'btn-default': newItem === ''}"
    (click)="addNewItem()">Add Item</button>

  <!-- Iterating over items -->
  <ul class="list-group">
    <li class="list-group-item" *ngFor="let item of items">{{ item }}</li>
  </ul>
  `,
  styles: []
})
export class CartComponent {
  @Input() items = [];
  newItem = '';
  @Output() itemAdded = new EventEmitter();

  addNewItem() {
    this.itemAdded.emit(this.newItem);
  }
}
