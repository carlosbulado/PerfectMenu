//
//  UserService.swift
//  PerfectMenu
//
//  Created by Carlos José Bulado on 2019-09-22.
//  Copyright © 2019 Carlos José Bulado. All rights reserved.
//

import Foundation

class UserService : ServiceBase, IUserService
{
    func Login(_ login : String?, _ password : String?) throws -> User {
        return User()
        // try (self.repository as! IUserRepository).Login(login, password)
    }
    
    init()
    {
        super.init(UserRepository())
    }
    
    //func SaveUser(user: User) throws -> Bool {
    //    return try (self.repository as! UserRepository).SaveUser(user: user)
    //}
    
    
}
