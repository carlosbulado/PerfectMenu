import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Entity } from 'src/models/entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export abstract class BaseRepository<T extends Entity>
{
  public entries : T[];
  public pathForApi : string;

  constructor
    (
      public TableName: string,
      protected http: HttpClient
    )
    {
      this.pathForApi = location.origin + '/api/';
      if(this.pathForApi == 'http://localhost:8100/api/')
      {
        this.pathForApi = 'https://localhost:44309/api/'
      }
    }

  public getAll(): Observable<any>
  {
    console.log('REPOSITORY - GETTING ALL RECORDS FOR: ' + this.TableName);
    return this.http.get(this.pathForApi + this.TableName);
  }

  public getById(guid: string): Observable<any>
  {
    console.log('REPOSITORY - GETTING RECORD BY ID FOR: ' + this.TableName);
    console.log('REPOSITORY - GUID: ' + guid);
    return this.http.get(this.pathForApi + this.TableName + '/' + guid);
  }

  public add(object: T): Observable<any>
  {
    console.log('REPOSITORY - ADDING ENTRY FOR: ' + this.TableName);
    return this.save(object);
  }

  public update(object: T): Observable<any>
  {
    console.log('REPOSITORY - UPDATING ENTRY FOR: ' + this.TableName);
    return this.save(object);
  }

  public save(object : T) : Observable<any>
  {
    console.log('REPOSITORY - SAVING ENTRY FOR: ' + this.TableName);
    var headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return this.http.post<T>(this.pathForApi + this.TableName, object, { headers });
  }

  public delete(guid: string): Observable<any>
  {
    console.log('REPOSITORY - DELETING ENTRY FOR: ' + this.TableName);
    return this.http.delete<T>(this.pathForApi + this.TableName + '/' + guid);
  }
}