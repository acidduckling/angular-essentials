import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
  <input [(ngModel)]="newItem" type="text">
  <button type="button" class="btn btn-primary" (click)="addNewItem()">Add Item</button>
  `,
  styles: []
})
export class CartComponent {
  @Input() items = [];
  newItem: string;
  @Output() itemAdded = new EventEmitter();

  addNewItem() {
    this.itemAdded.emit(this.newItem);
  }
}
