import { Component } from '@angular/core';
import { MenuCard } from 'src/models/menucard';
import { PerfectNavigation } from 'src/utils/perfect-navigation';
import { BasePage } from '../base.page';
import { MenuCardService } from 'src/service/menucard.service';
import { PerfectAlert } from 'src/utils/perfect-alert';

@Component({
  selector: 'page-menu-card',
  templateUrl: './menu-card.page.html',
  styleUrls: ['./menu-card.page.scss']
})
export class MenuCardPage extends BasePage
{
  public menuCards : MenuCard[];

  constructor(protected navigation : PerfectNavigation, private mcServ : MenuCardService, protected _alerts : PerfectAlert)
  {
    super(navigation, _alerts);
  }

  public async cardClicked(card : MenuCard) : Promise<void>
  {
    this.navigation.push('menu-content', { id: card.Guid });
  }

  public async addNewMenuCard() : Promise<void>
  {
    this.navigation.push('add-menu-card');
  }

  ionViewWillEnter()
  {
    this.menuCards = this.mcServ.entries;
    this.mcServ.getAll().subscribe(entries =>
    {
      this.menuCards = entries
    });
  }

}
