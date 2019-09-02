import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Entity } from 'src/models/entity';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PerfectStorage
{
  public TableName : string;

  constructor(private storage: Storage)
  {
    
  }
 
  // CREATE
  public async addItem(item : Entity) : Promise<any>
  {
    let items : Entity[] = await this.storage.get(this.TableName);
    
    if (items)
    {
      items.push(item);
      return this.storage.set(this.TableName, items);
    }
    
    return this.storage.set(this.TableName, [item]);
  }
 
  // READ
  public async getItems() : Promise<any[]> { return await this.storage.get(this.TableName); }
 
  // UPDATE
  public async updateItem(item : Entity) : Promise<any>
  {
    let items = await this.storage.get(this.TableName);
    
    if (!items || items.length === 0) {
      return null;
    }

    let newItems: Entity[] = [];

    for (let i of items)
    {
      if (i.Guid === item.guid)
        newItems.push(item);
      else
        newItems.push(i);
    }

    return this.storage.set(this.TableName, newItems);
  }
 
  // DELETE
  public async deleteItem(guid : string) : Promise<any>
  {
    let items = await this.storage.get(this.TableName);
    
    if (!items || items.length === 0) return null;

    let toKeep: Entity[] = [];

    for (let i of items)
      if (i.Guid !== guid)
        toKeep.push(i);

    return this.storage.set(this.TableName, toKeep);
  }
}

@Injectable()
export class PerfectSQL
{
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
  developers = new BehaviorSubject([]);
  products = new BehaviorSubject([]);
 
  constructor
  (
    private plt: Platform,
    private sqlite: SQLite, 
    private http: HttpClient
  )
  {
    this.plt.ready().then(() =>
    {
      this.initDatabase();
    });
  }

  public async initDatabase() : Promise<void>
  {
    let db = await this.sqlite.create({
      name: 'perfect.db',
      location: 'default'
    });
    this.database = db;
    console.log('Load database:', this.database);
  }

 
  // seedDatabase() {
  //   this.http.get('assets/seed.sql', { responseType: 'text'})
  //   .subscribe(sql => {
  //     this.sqlitePorter.importSqlToDb(this.database, sql)
  //       .then(_ => {
  //         this.loadDevelopers();
  //         this.loadProducts();
  //         this.dbReady.next(true);
  //       })
  //       .catch(e => console.error(e));
  //   });
  // }
 
  // getDatabaseState() {
  //   return this.dbReady.asObservable();
  // }
 
  // getDevs(): Observable<Dev[]> {
  //   return this.developers.asObservable();
  // }
 
  // getProducts(): Observable<any[]> {
  //   return this.products.asObservable();
  // }

  // loadDevelopers() {
  //   return this.database.executeSql('SELECT * FROM developer', []).then(data => {
  //     let developers: Dev[] = [];

  //     if (data.rows.length > 0) {
  //       for (var i = 0; i < data.rows.length; i++) {
  //         let skills = [];
  //         if (data.rows.item(i).skills != '') {
  //           skills = JSON.parse(data.rows.item(i).skills);
  //         }

  //         developers.push({ 
  //           id: data.rows.item(i).id,
  //           name: data.rows.item(i).name, 
  //           skills: skills, 
  //           img: data.rows.item(i).img
  //         });
  //       }
  //     }
  //     this.developers.next(developers);
  //   });
  // }

  // addDeveloper(name, skills, img) {
  //   let data = [name, JSON.stringify(skills), img];
  //   return this.database.executeSql('INSERT INTO developer (name, skills, img) VALUES (?, ?, ?)', data).then(data => {
  //     this.loadDevelopers();
  //   });
  // }

  // getDeveloper(id): Promise<Dev> {
  //   return this.database.executeSql('SELECT * FROM developer WHERE id = ?', [id]).then(data => {
  //     let skills = [];
  //     if (data.rows.item(0).skills != '') {
  //       skills = JSON.parse(data.rows.item(0).skills);
  //     }

  //     return {
  //       id: data.rows.item(0).id,
  //       name: data.rows.item(0).name, 
  //       skills: skills, 
  //       img: data.rows.item(0).img
  //     }
  //   });
  // }

  // deleteDeveloper(id) {
  //   return this.database.executeSql('DELETE FROM developer WHERE id = ?', [id]).then(_ => {
  //     this.loadDevelopers();
  //     this.loadProducts();
  //   });
  // }

  // updateDeveloper(dev: Dev) {
  //   let data = [dev.name, JSON.stringify(dev.skills), dev.img];
  //   return this.database.executeSql(`UPDATE developer SET name = ?, skills = ?, img = ? WHERE id = ${dev.id}`, data).then(data => {
  //     this.loadDevelopers();
  //   })
  // }

  // loadProducts() {
  //   let query = 'SELECT product.name, product.id, developer.name AS creator FROM product JOIN developer ON developer.id = product.creatorId';
  //   return this.database.executeSql(query, []).then(data => {
  //     let products = [];
  //     if (data.rows.length > 0) {
  //       for (var i = 0; i < data.rows.length; i++) {
  //         products.push({ 
  //           name: data.rows.item(i).name,
  //           id: data.rows.item(i).id,
  //           creator: data.rows.item(i).creator,
  //         });
  //       }
  //     }
  //     this.products.next(products);
  //   });
  // }

  // addProduct(name, creator) {
  //   let data = [name, creator];
  //   return this.database.executeSql('INSERT INTO product (name, creatorId) VALUES (?, ?)', data).then(data => {
  //     this.loadProducts();
  //   });
  // }

  // this.db.create({
  //   name: 'data.db',
  //   location: 'default'
  // })
  //   .then((db: SQLiteObject) => {
  
  
  //     db.executeSql('create table danceMoves(name VARCHAR(32))', [])
  //       .then(() => console.log('Executed SQL'))
  //       .catch(e => console.log(e));
  
  
  //   })
  //   .catch(e => console.log(e));
}

/*
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
 
export interface Dev {
  id: number,
  name: string,
  skills: any[],
  img: string
}
 
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
  developers = new BehaviorSubject([]);
  products = new BehaviorSubject([]);
 
  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'developers.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }
 
  seedDatabase() {
    this.http.get('assets/seed.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadDevelopers();
          this.loadProducts();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }
 
  getDatabaseState() {
    return this.dbReady.asObservable();
  }
 
  getDevs(): Observable<Dev[]> {
    return this.developers.asObservable();
  }
 
  getProducts(): Observable<any[]> {
    return this.products.asObservable();
  }
}
*/