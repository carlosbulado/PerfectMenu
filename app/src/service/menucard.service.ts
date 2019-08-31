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

  //public async save(object : MenuCard) : Promise<MenuCard>
  //{
  //  for(let item of object._items)
  //  {
  //    this.miServ.save(item);
  //  }
  //  super.save(object);
  //  return object;
  //}
}
