import { BaseRepository } from './base.repository';
import { MenuCard } from '../models/menucard';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { MenuItemRepository } from './menuitem.repository';

@Injectable()
export class MenuCardRepository extends BaseRepository<MenuCard>
{
    constructor(protected afs : AngularFirestore, private miRep : MenuItemRepository)
    {
        super('MenuCard', afs);
    }

    public loadFullObject(entry : MenuCard) : Promise<void>
    {
        if(!this.miRep.entries) entry._items = [];
        else entry._items = this.miRep.entries.filter(x => x.MenuCardGuid == entry.Guid);
        return super.loadFullObject(entry);
    }
}