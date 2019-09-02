import { Component, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base.page';
import { MenuCard } from 'src/models/menucard';
import { MenuCardService } from 'src/service/menucard.service';
import { PageUtil } from '../../utils/page-util';

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
    protected _pageUtils : PageUtil,
    protected menuCardService : MenuCardService
  )
  {
    super(_pageUtils);
    this.mc = new MenuCard();
  }

  ionViewWillEnter()
  {
    super.ionViewWillEnter();
    let guid = this._pageUtils._navigation.get('id');
    if (guid) this.menuCardService.getById(guid).subscribe(entry =>{
      this.mc = entry;
    });
  }

  public async editMenuCard() : Promise<void>
  {
    this._pageUtils._navigation.push('add-menu-card', { id: this.mc.guid });
  }

  public async close() : Promise<void>
  {
    await this._pageUtils._navigation.back();
  }

}
