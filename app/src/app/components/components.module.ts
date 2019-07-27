import { NgModule } from '@angular/core';
import { AddMenuItemComponent } from './add-menu-item/add-menu-item.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/pipes/pipes.module';

@NgModule({
    declarations:
    [
        AddMenuItemComponent
    ],
    entryComponents:
    [
        AddMenuItemComponent
    ],
    imports: [IonicModule.forRoot(), FormsModule, PipesModule],
    providers: [],
    bootstrap: []
})
export class ComponentsModule {}
