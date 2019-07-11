export class Entity
{
    public Guid : string;

    public getData() : any
    {
        const result = {};
        Object.keys(this).map(key => result[key] = this[key]);
        return result;
    }
}