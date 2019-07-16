import { Guid } from 'src/utils/guid';

export class Entity
{
    public Guid : string;
    private _isNewEntry : boolean = false;
    public isNewEntry() : boolean { return this._isNewEntry; }

    constructor()
    {
        this.Guid = Guid.newGuid();
        this._isNewEntry = true;
    }

    public getData() : any
    {
        const result = {};
        Object.keys(this).map(key => result[key] = this[key]);
        return result;
    }
}