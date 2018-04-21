import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItems } from '../../models/Menu_Items'
import { MenuItem } from '../../models/Menu_Item'

import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';

/*
  Generated class for the MenuItemServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EchoServiceProvider {

  constructor(private afDB: AngularFireDatabase) {
    console.log('Hello MenuItemServiceProvider Provider');
  }

  loadMenuItems(offset: number, limit: number): Observable< MenuItems >{

    return this.afDB.list<MenuItem>('/menu_items', ref => ref.orderByChild('order'))
      .valueChanges()
      .map( items => ({
         "offset" : offset,
         "limit" : limit,
         "total": limit + offset,
         "results": items
       }));

  }

}
