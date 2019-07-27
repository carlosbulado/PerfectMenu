import { Component } from '@angular/core';
import { BaseCrudPage } from '../base-crud.page';
import { MenuCard } from 'src/models/menucard';
import { ModalController } from '@ionic/angular';
import { AddMenuItemComponent } from '../components/add-menu-item/add-menu-item.component';
import { MenuItem } from 'src/models/menuitem';
import { PageUtil } from '../../utils/page-util';
import { MenuCardService } from 'src/service/menucard.service';
import { EntityStatus } from 'src/models/entity';

@Component({
  selector: 'page-add-menu-card',
  templateUrl: './add-menu-card.page.html',
  styleUrls: ['./add-menu-card.page.scss'],
})
export class AddMenuCardPage extends BaseCrudPage<MenuCard>
{
  constructor
  (
    protected _pageUtils : PageUtil,
    protected _service : MenuCardService,
    protected modalCtrl : ModalController
  )
  {
    super(_pageUtils, _service);
    this.item = new MenuCard();
  }

  public async addNewItem() : Promise<void>
  {
    let modal = await this.modalCtrl.create({ 
        component: AddMenuItemComponent,
        componentProps: {
          menuCardId : this.item.Guid
        }
      });
    modal.onDidDismiss().then(data => {
      console.log('Trying to add Menu Item: ', data);
      if (data !== null)
      {
        let menuItem = data['data'];
        if(menuItem)
          this.item._items.push(menuItem);
      }
   });
   await modal.present();
  }

  public async editItem(menuItem : MenuItem) : Promise<void>
  {
    let modal = await this.modalCtrl.create({ 
        component: AddMenuItemComponent,
        componentProps: {
          menuCardId : this.item.Guid,
          menuItem : menuItem
        }
      });
    modal.onDidDismiss().then(data => {
      console.log('Trying to edit Menu Item: ', data);
   });
   await modal.present();
  }

  public async removeItem(menuItem : MenuItem) : Promise<void>
  {
    await this._pageUtils._alerts.YesNoAlert('Want to delete?', 'This item will be deleted permanently!', 
      function() {
        menuItem.Status = EntityStatus.Inactive;
      });
  }

  public getItemSubscribed(entry : MenuCard)
  {
    super.getItemSubscribed(entry);
    if(!this.item._items) this.item._items = [];
  }
}
