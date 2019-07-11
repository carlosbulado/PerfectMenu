import { NgModule } from '@angular/core';
import { MenuCardRepository } from './menucard.repository';
import { MenuItemRepository } from './menuitem.repository';

@NgModule({
    declarations: [],
    entryComponents: [],
    imports: [],
    providers: 
    [
        MenuCardRepository,
        MenuItemRepository
    ],
    bootstrap: []
})
export class RepositoryModule {}
