import { Injectable } from '@angular/core';
import { Entity } from 'src/models/entity';

@Injectable()
export class UtilFunctions
{
    constructor() { }

    public removeEntityFromArray(item : Entity, array : Array<Entity>)
    {
        let index = array.findIndex(x => x.guid == item.guid);
        array.splice(index, 1);
    }
}