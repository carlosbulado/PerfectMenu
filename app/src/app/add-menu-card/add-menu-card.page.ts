import { Component, OnInit } from '@angular/core';
import { BaseCrudPage } from '../base-crud.page';
import { PerfectNavigation } from 'src/utils/perfect-navigation';
import { MenuCard } from 'src/models/menucard';
import { MenuCardService } from 'src/service/menucard.service';
import { ActivatedRoute } from '@angular/router';
import { PerfectAlert } from 'src/utils/perfect-alert';

@Component({
  selector: 'page-add-menu-card',
  templateUrl: './add-menu-card.page.html',
  styleUrls: ['./add-menu-card.page.scss'],
})
export class AddMenuCardPage extends BaseCrudPage<MenuCard>
{
  constructor
  (
    protected navigation : PerfectNavigation,
    protected _service : MenuCardService,
    protected activatedRoute : ActivatedRoute,
    protected _alerts : PerfectAlert
  )
  {
    super(navigation, _service, activatedRoute, _alerts);
    this.item = new MenuCard();
  }

  ionViewWillEnter()
  {
    let menuCardGuid = this.navigation.get('id');
    if (menuCardGuid)
    {
      this.item = this._service.getById(menuCardGuid);
    }
  }
}
