import { Entity } from './entity';
import { MenuItem } from './menuitem';

export class MenuCard extends Entity
{
    public Title : string;
    public Description : string;
    public Image : string;

    public _items : MenuItem[];

    constructor()
    {
        super();
        this._items = [];
    }
}