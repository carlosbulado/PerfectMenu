//
//  ServiceBase.swift
//  PerfectMenu
//
//  Created by Carlos José Bulado on 2019-09-22.
//  Copyright © 2019 Carlos José Bulado. All rights reserved.
//

import Foundation

class ServiceBase : IServiceBase
{
    func save<T>(obj: T) throws -> Bool where T : Entity {
        return try self.repository.save(obj)
    }
    
    var repository : IRepositoryBase
    
    init(_ repo : IRepositoryBase)
    {
        self.repository = repo
    }
    
    func getRepository() -> IRepositoryBase {
        return self.repository
    }
}
