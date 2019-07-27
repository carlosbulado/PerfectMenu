import { Entity } from 'src/models/entity';
import { BaseRepository } from 'src/repository/base.repository';
import { Guid } from 'src/utils/guid';
import { Observable } from 'rxjs';
import { DocumentReference } from 'angularfire2/firestore';

export abstract class BaseService<T extends Entity>
{
    public entries : T[];

    constructor(protected _repository : BaseRepository<T>)
    {
        this.entries = this._repository.entries;
    }

    public getAll(): Observable<T[]>
    {
        return this._repository.getAll();
    }
    
    public getById(guid : string) : Observable<T>
    {
        return this._repository.getById(guid);
    }
    
    public async save(object : T) : Promise<T>
    {
        try
        {
            if(!object.isNewEntry()) await this.update(object);
            else await this.add(object);
        }
        catch
        { 
            await this.update(object);
        }
        
        return object;
    }

    protected async add(object : T): Promise<DocumentReference> { return await this._repository.add(object); }
    
    protected async update(object : T): Promise<void> { return await this._repository.update(object); }
    
    public async delete(guid : string): Promise<void> { return await this._repository.delete(guid); }
}