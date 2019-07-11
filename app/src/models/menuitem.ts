import { Entity } from './entity';

export class MenuItem extends Entity
{
    public Name : string;
    public Description : string;
    public Price : number;
    public SortNumber : number;
    public Image : string;
    public MenuCardGuid : string;

    // Interface props
    public QuantityOrdered : number;
}