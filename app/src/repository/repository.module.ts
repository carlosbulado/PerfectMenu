import { NgModule } from '@angular/core';
import { MenuCardRepository } from './menucard.repository';
import { MenuItemRepository } from './menuitem.repository';
import { UserRepository } from './user.repository';

@NgModule({
    declarations: [],
    entryComponents: [],
    imports: [],
    providers: 
    [
        MenuCardRepository,
        MenuItemRepository,
        UserRepository
    ],
    bootstrap: []
})
export class RepositoryModule {}
