import { NgModule } from '@angular/core';
import { AddMenuItemComponent } from './add-menu-item/add-menu-item.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations:
    [
        AddMenuItemComponent
    ],
    entryComponents:
    [
        AddMenuItemComponent
    ],
    imports: [IonicModule.forRoot()],
    providers: [],
    bootstrap: []
})
export class ComponentsModule {}
