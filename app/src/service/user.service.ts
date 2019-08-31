import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from 'src/models/user';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class UserService extends BaseService<User>
{
  constructor(protected _repository: UserRepository)
  {
    super(_repository);
  }

  public async getByLoginPswrd(login: string, pswrd: string): Promise<User>
  {
    return null;
  }
}
