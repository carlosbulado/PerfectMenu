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
  public rememberPswrd : boolean;

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
    this.userService.getByLoginPswrd(this.user.login, this.user.pswrd).subscribe(entry =>
      {
        if(entry) this._pageUtils._navigation.push('dashboard');
        else
        {
          this._pageUtils._alerts.okAlert("Login", "Login or Password Incorrect");
        }
      })
  }
}
