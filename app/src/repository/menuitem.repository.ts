import { BaseRepository } from './base.repository';
import { MenuItem } from 'src/models/menuitem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuItemRepository extends BaseRepository<MenuItem>
{
  constructor(protected http: HttpClient)
  {
    super('MenuItem', http);
  }
}