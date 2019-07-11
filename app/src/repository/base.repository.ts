import { Injectable } from "@angular/core";
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Entity } from 'src/models/entity';

@Injectable()
export abstract class BaseRepository<T extends Entity>
{
    private entity: Observable<T[]>;
    private entityCollection: AngularFirestoreCollection<any>;
    
    constructor
    (
        public TableName : string,
        protected afs : AngularFirestore
    )
    {
        this.entityCollection = this.afs.collection<T>(TableName);
        this.entity = this.entityCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                console.log('REPOSITORY - READING INFO FOR: ' + this.TableName);
                return { id, ...data } as T;
                });
            })
        );
    }
    
    public getAll(): Observable<T[]>
    {
        console.log('REPOSITORY - GETTING ALL RECORDS FOR: ' + this.TableName);
        return this.entity;
    }
    
    public getById(guid : string): Observable<T>
    {
        console.log('REPOSITORY - GETTING RECORD BY ID FOR: ' + this.TableName);
        return this.entityCollection.doc<T>(guid).valueChanges().pipe(
            take(1),
            map(obj => {
                obj.Guid = guid;
                return obj
            })
        );
    }
    
    public async add(object : T): Promise<DocumentReference>
    {
        console.log('REPOSITORY - ADDING ENTRY FOR: ' + this.TableName);
        this.removePropertiesForConnectingToFirebase(object);
        return await this.entityCollection.add(object);
    }
    
    public async update(object : T): Promise<void>
    {
        console.log('REPOSITORY - UPDATING ENTRY FOR: ' + this.TableName);
        let idForUpdate = object['id'];
        this.removePropertiesForConnectingToFirebase(object);
        return await this.entityCollection.doc(idForUpdate).update(object);
    }
    
    public async delete(guid : string): Promise<void>
    {
        console.log('REPOSITORY - DELETING ENTRY FOR: ' + this.TableName);
        return await this.entityCollection.doc(guid).delete();
    }

    private removePropertiesForConnectingToFirebase (object : Object) : void
    {
        delete object['id'];

        for (let [key, value] of Object.entries(object))
        {
            // if(value instanceof Array)
            // {
            //     delete object[key];
            // }
            if(key.charAt(0) == '_')
            {
                delete object[key];
            }
        }
    }
}

/*

*/

/*
// private _TableName : string;
// public get TableName() : string { return this._TableName; }
// public set TableName(v : string)
// {
//     this._TableName = v;
//     this.db.TableName = v;
// }

// constructor(protected db : PerfectStorage) { }

// // CREATE
// public async addItem(item : Entity) : Promise<T> { return await this.db.addItem(item); }

// // GETBYID
// public async getById(guid : string) : Promise<T> { return null; }

// // READ
// public async getAll() : Promise<T[]> { return await this.db.getItems(); }

// // UPDATE
// public async updateItem(item : Entity) : Promise<T> { return await this.db.updateItem(item); }

// // DELETE
// public async deleteItem(guid : string) : Promise<T> { return await this.db.deleteItem(guid); }
*/