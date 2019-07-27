import { NgModule } from '@angular/core';
import { EntityStatusPipe } from './entity-pipe';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [EntityStatusPipe],
    entryComponents: [],
    imports: [IonicModule],
    providers: [EntityStatusPipe],
    bootstrap: [],
    exports: [EntityStatusPipe],
})
export class PipesModule
{
    // static forRoot() {
    //     return {
    //         ngModule: PipesModule,
    //         providers: [],
    //     };
    // }
}
