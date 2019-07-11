import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { MenuCard } from 'src/models/menucard';
import { MenuCardRepository } from 'src/repository/menucard.repository';
import { MenuItemService } from './menuitem.service';

@Injectable()
export class MenuCardService extends BaseService<MenuCard>
{
  constructor(protected _repository : MenuCardRepository, protected miServ : MenuItemService)
  {
    super(_repository);
  }

  public getById(guid : string) : MenuCard
  {
    let entry = super.getById(guid);
    entry._items = this.miServ.getByMenuCardId(guid);
    return entry;
  }
}
