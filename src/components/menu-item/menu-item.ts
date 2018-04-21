import { Component } from '@angular/core';

/**
 * Generated class for the MenuItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-item',
  templateUrl: 'menu-item.html'
})
export class MenuItemComponent {

  text: string;

  constructor() {
    console.log('Hello MenuItemComponent Component');
    this.text = 'Hello World';
  }

}
