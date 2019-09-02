import { Component } from '@angular/core';
import { MenuCard } from 'src/models/menucard';
import { BasePage } from '../base.page';
import { MenuCardService } from 'src/service/menucard.service';
import { PageUtil } from 'src/utils/page-util';

@Component({
  selector: 'page-menu-card',
  templateUrl: './menu-card.page.html',
  styleUrls: ['./menu-card.page.scss']
})
export class MenuCardPage extends BasePage
{
  public menuCards : MenuCard[];

  constructor(protected _pageUtils : PageUtil, private mcServ : MenuCardService)
  {
    super(_pageUtils);
  }

  public async cardClicked(card : MenuCard) : Promise<void>
  {
    this._pageUtils._navigation.push('menu-content', { id: card.guid });
  }

  public async addNewMenuCard() : Promise<void>
  {
    this._pageUtils._navigation.push('add-menu-card');
  }

  ionViewDidEnter()
  {
    this.menuCards = this.mcServ.entries;
    this.mcServ.getAll().subscribe(entries =>
    {
      this.menuCards = entries
    });
  }

}
