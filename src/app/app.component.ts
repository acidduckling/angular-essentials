import { Component } from '@angular/core';

// If we do not have the types, just import like this:
// import 'lodash';

// If we do not have a type definition file we can use a declare statement:
// declare var _: any;

// If types are available (eg. @types/lodash in this example) use the following:
import { random } from 'lodash';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootName = 'Jack';

  rootItems = ['Apples', 'Bannannas', 'Cherries'];

  num: number;

  onNameChanged(newName) {
    this.rootName = newName;
  }

  addNewItem(item) {
    this.rootItems.push(item);
    console.log(this.rootItems);
  }

  randNumber() {
    this.num = random(1, 10);
  }
}
