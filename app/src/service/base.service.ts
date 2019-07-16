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
        this._repository.getAll().subscribe(allData => {
            this.entries = allData;
            console.log('SERVICE - INIT LIST OF ' + this.entries.toString());
        });
    }

    public getAll(): Observable<T[]>
    {
        return null;
        let obs = this._repository.getAll();
        obs.subscribe(entries =>{
            this.entries = entries;
        });
        return obs;
        //return this._repository.getAll();
        //return this.entries;
        //return this.entriesObservable;
    }
    
    public getById(guid : string) : T
    {
        return null;
        //return this._repository.getById(guid);
        let entry = this.entries.filter(x => x.Guid == guid)[0];
        console.log('SERVICE - GETTING ENTRY OF ' + (entry ? entry.constructor.name : 'Nothing'));
        return entry;
    }
    
    public async save(object : T) : Promise<T>
    {
        return null;
        if(!object.isNewEntry()) await this.update(object);
        else await this.add(object);
        
        return object;
    }

    protected async add(object : T): Promise<DocumentReference> { return await this._repository.add(object); }
    
    protected async update(object : T): Promise<void> { return await this._repository.update(object); }
    
    public async delete(guid : string): Promise<void> { return await this._repository.delete(guid); }
}


/*
// constructor(protected _repository : BaseRepository<T>) { }

// public async getById(id : string) : Promise<T> { return await this._repository.getById(id); }
// public async getAll() : Promise<T[]> { return await this._repository.getAll(); }

// // CREATE OR UPDATE
// public async save(item : Entity) : Promise<T>
// {
//     if(item.Guid) return await this._repository.updateItem(item);
    
//     item.Guid = Guid.newGuid();
//     return await this._repository.addItem(item);
// }

// // DELETE
// public async deleteItem(guid : string) : Promise<T> { return await this._repository.deleteItem(guid); }
*/