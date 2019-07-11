import { BasePage } from './base.page';
import { Entity } from '../models/entity';
import { PerfectNavigation } from '../utils/perfect-navigation';
import { BaseService } from 'src/service/base.service';
import { ActivatedRoute } from '@angular/router';
import { PerfectAlert } from 'src/utils/perfect-alert';

export abstract class BaseCrudPage<T extends Entity> extends BasePage
{
    public item : T;
    protected saveActionOption : SaveActionOptions;

    constructor
    (
        protected navigation : PerfectNavigation,
        protected _service : BaseService<T>,
        protected activedRoute : ActivatedRoute,
        protected _alerts : PerfectAlert
    )
    {
        super(navigation, _alerts);
        this.saveActionOption = 0;
    }

    public async save() : Promise<void>
    {
        let newItem = await this._service.save(this.item);
        if (newItem) await this._alerts.okAlert('Saved', 'Item saved!');
        switch(this.saveActionOption)
        {
            case 0:
                this.navigation.back();
                break;
            case 1:
                this.item = newItem;
                break;
            case 2:
                //this.navigation.push(this.activedRoute.snapshot.routeConfig. ._routerState.url);
                break;
        }
    }
}