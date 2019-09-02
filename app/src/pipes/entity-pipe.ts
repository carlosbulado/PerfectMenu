import { Pipe, PipeTransform } from '@angular/core';
import { Entity } from '../models/entity';

@Pipe({ name: 'ESP' })
export class EntityStatusPipe implements PipeTransform
{
  transform(items: Entity[]) : Entity[]
  {
    //if (!items) return items;
    return items.filter(item => item.status == 0);
    // if (items instanceof Entity && items.Status == 0) return items;
  }
}