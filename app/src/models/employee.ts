import { Entity } from './entity';

export class Employee extends Entity
{
    public Name : string;
    public CompanyHierarchyGuid : string;
    public ManagerGuid : string;
}