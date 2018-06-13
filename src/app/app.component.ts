import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootName = 'Jack';

  rootItems = ['Apples', 'Bannannas', 'Cherries'];

  onNameChanged(newName) {
    this.rootName = newName;
  }

  addNewItem(item) {
    this.rootItems.push(item);
    console.log(this.rootItems);
  }
}
