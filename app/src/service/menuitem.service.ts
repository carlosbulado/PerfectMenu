import { MenuItem } from 'src/models/menuitem';
import { BaseService } from './base.service';
import { MenuItemRepository } from '../repository/menuitem.repository';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuItemService extends BaseService<MenuItem>
{
    constructor(protected _repository : MenuItemRepository)
    {
        super(_repository);
    }

    getByMenuCardId(guid: string): MenuItem[]
    {
        return this.entries.filter(x => x.MenuCardGuid == guid);
    }
}