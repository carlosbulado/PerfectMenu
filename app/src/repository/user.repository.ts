import { BaseRepository } from './base.repository';
import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserRepository extends BaseRepository<User>
{
  constructor(protected http: HttpClient)
  {
    super('User', http);
  }

  public getByLoginPswrd(login: string, pswrd: string): Observable<any>
  {
    console.log('REPOSITORY - USER - TRY TO LOGIN');
    return this.http.get(this.pathForApi + this.TableName + '/GetByLoginPswrd/' + login + '/' + pswrd);
  }
}