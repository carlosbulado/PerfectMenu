import { NgModule } from '@angular/core';
import { MenuItemService } from './menuitem.service';
import { RepositoryModule } from 'src/repository/repository.module';
import { MenuCardService } from "./menucard.service";
import { UserService } from "./user.service";

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
        MenuCardService,
        UserService
    ],
    bootstrap: []
})
export class ServiceModule {}
