import { Entity } from 'src/models/entity';
import { BaseRepository } from 'src/repository/base.repository';
import { Observable } from 'rxjs';
import { DocumentReference } from 'angularfire2/firestore';

export abstract class BaseService<T extends Entity>
{
  public entries : T[];

  constructor(protected _repository : BaseRepository<T>) { this.entries = this._repository.entries; }

  public getAll(): Observable<T[]> { return this._repository.getAll(); }
  
  public getById(guid : string) : Observable<T> { return this._repository.getById(guid); }

  public save(object : T) : Observable<T> { return this._repository.save(object); }

  public delete(guid : string): Observable<T> { return this._repository.delete(guid); }
}