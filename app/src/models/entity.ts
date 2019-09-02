import { Guid } from 'src/utils/guid';

export class Entity
{
  public guid : string;
  public companyGuid : string;
  public status : EntityStatus;

  constructor()
  {
    this.guid = Guid.newGuid();
    this.status = EntityStatus.Active;
  }
}

export enum EntityStatus
{
    Active = 0,
    Inactive = 1
}