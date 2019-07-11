import { BaseRepository } from './base.repository';
import { MenuCard } from '../models/menucard';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class MenuCardRepository extends BaseRepository<MenuCard>
{
    constructor(protected afs : AngularFirestore)
    {
        super('MenuCard', afs);
    }

    // constructor(protected db : PerfectStorage)
    // {
    //     super(db);
    //     this.TableName = 'MenuCard';
    // }

    // public async getAll() : Promise<MenuCard[]>
    // {
    //     let menuCards = [];

    //     let menuCard = new MenuCard();
    //     menuCard.Guid = '1';
    //     menuCard.Title = 'Desserts';
    //     menuCard.Description = 'Desserts description';
    //     menuCard.Image = 'group_img_001.jpg';
    //     menuCards.push(menuCard);
        
    //     menuCard = new MenuCard();
    //     menuCard.Guid = '2';
    //     menuCard.Title = 'Steak';
    //     menuCard.Description = 'Steak description';
    //     menuCard.Image = 'group_img_002.jpg';
    //     menuCards.push(menuCard);

    //     menuCard = new MenuCard();
    //     menuCard.Guid = '3';
    //     menuCard.Title = 'Veggies';
    //     menuCard.Description = 'Veggies description';
    //     menuCard.Image = 'group_img_003.jpg';
    //     menuCards.push(menuCard);

    //     menuCard = new MenuCard();
    //     menuCard.Guid = '4';
    //     menuCard.Title = 'Drinks';
    //     menuCard.Description = 'Drinks description';
    //     menuCard.Image = 'group_img_004.jpg';
    //     menuCards.push(menuCard);

    //     return menuCards;
    // }
}