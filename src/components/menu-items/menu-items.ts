import { Component } from '@angular/core';

/**
 * Generated class for the MenuItemsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-items',
  templateUrl: 'menu-items.html'
})
export class MenuItemsComponent {

  text: string;

  constructor() {
    console.log('Hello MenuItemsComponent Component');
    this.text = 'Hello World';
  }

}
