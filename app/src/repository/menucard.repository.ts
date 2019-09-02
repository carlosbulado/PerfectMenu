import { BaseRepository } from './base.repository';
import { MenuCard } from '../models/menucard';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuCardRepository extends BaseRepository<MenuCard>
{
  constructor(protected http: HttpClient)
  {
    super('MenuCard', http);
  }
}