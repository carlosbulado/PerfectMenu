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

    public entries : T[];

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

        this.getAll().subscribe(allData => {
            this.entries = allData;
            console.log('SERVICE - INIT LIST OF ' + this.entries.toString());
        });
    }
    
    public getAll(): Observable<T[]>
    {
        console.log('REPOSITORY - GETTING ALL RECORDS FOR: ' + this.TableName);
        return this.entity;
    }
    
    public getById(guid : string): Observable<T>
    {
        console.log('REPOSITORY - GETTING RECORD BY ID FOR: ' + this.TableName);
        console.log('REPOSITORY - GUID: ' + guid);
        return this.afs.collection<T>(this.TableName, ref => ref.where('Guid', '==', guid).limit(1))
        .valueChanges()
        .pipe(
            map(entries => {
                this.loadFullObject(entries[0]);
                return entries[0]
            })
        );
    }
    
    public async add(object : T): Promise<DocumentReference>
    {
        console.log('REPOSITORY - ADDING ENTRY FOR: ' + this.TableName);
        this.removePropertiesForConnectingToFirebase(object);
        return await this.entityCollection.add(object.getData());
    }
    
    public async update(object : T): Promise<void>
    {
        console.log('REPOSITORY - UPDATING ENTRY FOR: ' + this.TableName);
        let idForUpdate = this.entries.find(x => x.Guid == object.Guid)['id'];
        this.removePropertiesForConnectingToFirebase(object);
        return await this.entityCollection.doc(idForUpdate).update(object);
    }
    
    public async delete(guid : string): Promise<void>
    {
        console.log('REPOSITORY - DELETING ENTRY FOR: ' + this.TableName);
        let idForDelete = this.entries.find(x => x.Guid == guid)[0]['id'];
        return await this.entityCollection.doc(idForDelete).delete();
    }

    private removePropertiesForConnectingToFirebase (object : Object) : void
    {
        delete object['id'];

        for (let [key, value] of Object.entries(object))
        {
            if(key.charAt(0) == '_')
            {
                delete object[key];
            }
        }
    }

    protected loadFullObject(entry : T) : Promise<void> { return }
}