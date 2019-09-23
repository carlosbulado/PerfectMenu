//
//  Entity.swift
//  EasyParking
//
//  Created by Carlos Jose Bulado on 2018-11-02.
//  Copyright © 2018 Carlos Jose Bulado. All rights reserved.
//

import Foundation

class Entity : Codable
{
    var guid : String
    
    init() { self.guid = "" }
    
    init(_ guid : String)
    {
        self.guid = guid;
    }
    
//    required init(from decoder: Decoder) throws
//    {
//        let values = try decoder.container(keyedBy: EntityKeys.self)
//        self.guid = try values.decode(String.self, forKey: .guid)
//    }
//    
//    enum EntityKeys: String, CodingKey
//    {
//        case guid = "guid"
//    }
}
