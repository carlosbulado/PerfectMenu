import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { MenuItem } from 'src/models/menuitem';
import { MenuItemService } from 'src/service/menuitem.service';

@Component({
  selector: 'component-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.scss'],
})
export class AddMenuItemComponent
{
  public item : MenuItem;

  constructor
  (
    private modalController: ModalController, 
    private navParams: NavParams,
    private miServ : MenuItemService
  )
  {
    this.item = new MenuItem();
  }

  public async ionViewWillEnter() : Promise<void>
  {
    let menuCardId = this.navParams.get('menuCardId');
    let menuItemId = this.navParams.get('menuItemId');
    if(menuItemId) this.item = await this.miServ.getById(menuItemId);
    if(!this.item.MenuCardGuid) this.item.MenuCardGuid = menuCardId;
  }

  public async close() : Promise<void>
  {
    await this.modalController.dismiss();
  }

  public async save() : Promise<void>
  {
    await this.modalController.dismiss(this.item);
  }
}
