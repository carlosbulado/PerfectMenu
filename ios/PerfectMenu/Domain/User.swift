//
//  User.swift
//  EasyParking
//
//  Created by Carlos Jose Bulado on 2018-10-31.
//  Copyright © 2018 Carlos Jose Bulado. All rights reserved.
//

import Foundation

class User : Entity
{
    var name : String?
    var login : String?
    var pswrd : String?
    
    override init()
    {
        super.init()
    }
    
    init(_ guid : String, _ name : String, _ login : String, _ pass : String)
    {
        super.init(guid)
        self.name = name
        self.login = login
        self.pswrd = pass
    }
    
    required init(from decoder: Decoder) throws
    {
        try super.init(from: decoder)
        let values = try decoder.container(keyedBy: UserKeys.self)
        self.name = try values.decode(String.self, forKey: .name)
        self.login = try values.decode(String.self, forKey: .login)
        self.pswrd = try values.decode(String.self, forKey: .pswrd)
    }
    
    enum UserKeys: String, CodingKey
    {
        case name = "name"
        case login = "login"
        case pswrd = "pswrd"
    }
}
