import { Component } from '@angular/core';
import { User } from 'src/models/user';
import { BasePage } from '../base.page';
import { PageUtil } from 'src/utils/page-util';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends BasePage
{
  public user : User

  constructor(protected _pageUtils: PageUtil, protected userService: UserService)
  {
    super(_pageUtils);
    this.user = new User();
  }

  public Register()
  {
    this._pageUtils._navigation.push('register-user');
  }

  public async Login()
  {
    var userLogged = await this.userService.getByLoginPswrd(this.user.Login, this.user.Pswrd);
    if (userLogged)
    {

    }
  }
}
