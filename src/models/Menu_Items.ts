import { MenuItem } from './Menu_Item';
import { Observable } from 'rxjs';

export interface MenuItems {
  offset : number;
  limit : number;
  total? :number;
  // results : Observable<MenuItem>[];
  results : MenuItem[];
}
