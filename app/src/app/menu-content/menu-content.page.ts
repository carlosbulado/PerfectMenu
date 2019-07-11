import { Component, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base.page';
import { PerfectNavigation } from 'src/utils/perfect-navigation';
import { MenuCard } from 'src/models/menucard';
import { MenuCardService } from 'src/service/menucard.service';
import { PerfectAlert } from 'src/utils/perfect-alert';

@Component({
  selector: 'page-menu-content',
  templateUrl: './menu-content.page.html',
  styleUrls: ['./menu-content.page.scss'],
})
export class MenuContentPage extends BasePage
{
  public mc : MenuCard;

  constructor
  (
    protected navigation : PerfectNavigation,
    protected menuCardService : MenuCardService,
    protected _alerts : PerfectAlert
  )
  {
    super(navigation, _alerts);
    this.mc = new MenuCard();
  }

  ionViewWillEnter()
  {
    let menuCardGuid = this.navigation.get('id');
    if (menuCardGuid)
    {
      this.mc = this.menuCardService.getById(menuCardGuid);
    }
  }

  public async editMenuCard() : Promise<void>
  {
    this.navigation.push('add-menu-card', { id: this.mc.Guid });
  }

}
