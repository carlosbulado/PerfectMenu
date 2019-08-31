import { BaseRepository } from './base.repository';
import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserRepository extends BaseRepository<User>
{
  constructor(protected http: HttpClient)
    {
        super('User', http);
    }
}