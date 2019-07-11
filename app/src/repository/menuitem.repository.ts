import { BaseRepository } from './base.repository';
import { MenuItem } from 'src/models/menuitem';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class MenuItemRepository extends BaseRepository<MenuItem>
{
    constructor(protected afs : AngularFirestore)
    {
        super('MenuItem', afs);
    }

    // constructor(protected db : PerfectStorage)
    // {
    //     super(db);
    //     this.TableName = 'MenuItem';
    // }
    
    // public async getAll() : Promise<MenuItem[]>
    // {
    //     let menuItems = [];

    //     let menuItem = new MenuItem();
    //     menuItem.Guid = '1';
    //     menuItem.Name = 'Brownie';
    //     menuItem.Description = 'Simple Brownie';
    //     menuItem.Price = 6.99;
    //     menuItem.MenuCardGuid = '1';
    //     menuItems.push(menuItem);
        
    //     menuItem = new MenuItem();
    //     menuItem.Guid = '2';
    //     menuItem.Name = 'Cake';
    //     menuItem.Description = 'Simple Cake';
    //     menuItem.Price = 9.99;
    //     menuItem.MenuCardGuid = '1';
    //     menuItems.push(menuItem);
        
    //     menuItem = new MenuItem();
    //     menuItem.Guid = '3';
    //     menuItem.Name = 'Ice cream';
    //     menuItem.Description = 'Simple Ice cream';
    //     menuItem.Price = 0.99;
    //     menuItem.MenuCardGuid = '1';
    //     menuItems.push(menuItem);

    //     return menuItems;
    // }
}