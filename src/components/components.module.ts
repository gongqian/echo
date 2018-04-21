import { NgModule } from '@angular/core';
import { MenuItemsComponent } from './menu-items/menu-items';
import { MenuItemComponent } from './menu-item/menu-item';
@NgModule({
	declarations: [MenuItemsComponent,
    MenuItemComponent],
	imports: [],
	exports: [MenuItemsComponent,
    MenuItemComponent]
})
export class ComponentsModule {}
