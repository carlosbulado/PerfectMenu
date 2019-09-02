import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from 'src/models/user';
import { UserRepository } from 'src/repository/user.repository';
import { Observable } from 'rxjs';

@Injectable()
export class UserService extends BaseService<User>
{
  constructor(protected _repository: UserRepository)
  {
    super(_repository);
  }

  public getByLoginPswrd(login: string, pswrd: string) : Observable<User>
  {
    return this._repository.getByLoginPswrd(login, pswrd);
  }
}
