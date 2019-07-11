import { NgModule } from '@angular/core';
import { MenuItemService } from './menuitem.service';
import { RepositoryModule } from 'src/repository/repository.module';
import { MenuCardService } from "./menucard.service";

@NgModule({
    declarations: [],
    entryComponents: [],
    imports:
    [
        RepositoryModule
    ],
    providers: 
    [
        MenuItemService,
        MenuCardService
    ],
    bootstrap: []
})
export class ServiceModule {}
