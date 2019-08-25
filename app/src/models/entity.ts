import { Guid } from 'src/utils/guid';

export class Entity
{
    public Guid : string;
    public CompanyGuid : string;
    public Status : EntityStatus;
    private _isNewEntry : boolean = false;
    public isNewEntry() : boolean { return this._isNewEntry; }

    // Firebase
    public id : string;

    constructor()
    {
        this.Guid = Guid.newGuid();
        this._isNewEntry = true;
        this.Status = EntityStatus.Active;
    }

    public getData() : any
    {
        const result = { };
        Object.keys(this).map(key => result[key] = this[key]);
        return result;
    }

    public initializeAllNullArrays() : void
    {
        for (let [key, value] of Object.entries(this))
        {
            if(this[key] instanceof Array && !this[key])
            {
                this[key] = [];
            }
        }
    }
}

export enum EntityStatus
{
    Active = 0,
    Inactive = 1
}