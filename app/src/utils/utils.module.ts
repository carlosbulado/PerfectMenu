import { NgModule } from '@angular/core';
import { PerfectNavigation } from './perfect-navigation';
import { PerfectAlert } from './perfect-alert';
import { UtilFunctions } from './util-functions';
import { PageUtil } from './page-util';

@NgModule({
    declarations: [],
    entryComponents: [],
    imports: [],
    providers: 
    [
        PerfectNavigation,
        PerfectAlert,
        UtilFunctions,
        PageUtil
    ],
    bootstrap: []
})
export class UtilsModule {}
