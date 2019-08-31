import { BasePage } from './base.page';
import { Entity } from '../models/entity';
import { BaseService } from 'src/service/base.service';
import { PageUtil } from '../utils/page-util';

export abstract class BaseCrudPage<T extends Entity> extends BasePage
{
    public item : T;
    protected saveActionOption : SaveActionOptions;

    constructor
    (
        protected _pageUtils : PageUtil,
        protected _service : BaseService<T>
    )
    {
        super(_pageUtils);
        this.saveActionOption = 0;
    }

    ionViewDidEnter()
    {
        let guid = this._pageUtils._navigation.get('id');
        if (guid) this._service.getById(guid).subscribe(entry => { this.getItemSubscribed(entry); });
    }

    public getItemSubscribed(entry : T)
    {
        this.item = entry;
    }

    public async save() : Promise<void>
    {
      this._service.getAll().subscribe(x => console.log(x));
      this._service.save(this.item).subscribe(item => {
        if (item) this._pageUtils._alerts.okAlert('Saved', 'Item saved!');
        switch (this.saveActionOption) {
          case 0:
            this._pageUtils._navigation.back();
            break;
          case 1:
            this.item = item;
            break;
          case 2:
            //this._pageUtils._navigation.push(this.activedRoute.snapshot.routeConfig. ._routerState.url)
            break;
        }
      });
    }
}