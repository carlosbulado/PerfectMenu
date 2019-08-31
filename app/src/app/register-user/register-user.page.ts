import { Component, OnInit } from '@angular/core';
import { BaseCrudPage } from '../base-crud.page';
import { User } from 'src/models/user';
import { ModalController } from '@ionic/angular';
import { PageUtil } from 'src/utils/page-util';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage extends BaseCrudPage<User> {

  constructor
  (
  protected _pageUtils: PageUtil,
  protected _service: UserService,
  protected modalCtrl: ModalController
  )
  {
    super(_pageUtils, _service);
    this.item = new User();
  }

}
