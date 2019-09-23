//
//  ViewController.swift
//  PerfectMenu
//
//  Created by Carlos José Bulado on 2019-09-22.
//  Copyright © 2019 Carlos José Bulado. All rights reserved.
//

import UIKit

class ViewController: UIViewController
{
    @IBOutlet weak var mainLabel: UILabel!
    @IBOutlet weak var username: UITextField!
    @IBOutlet weak var password: UITextField!
    @IBOutlet weak var signup: UIButton!
    @IBOutlet weak var login: UIButton!
    
    override func viewDidLoad()
    {
        super.viewDidLoad()
        mainLabel.text = "Perfect Menu"
    }
    
    @IBAction func tapLogin(_ sender: Any)
    {
        AlertUtil.OkAlert(self, "test", "here")
        let url = URL(string: "https://5d88347bfeddff0014e1579c.mockapi.io/api/user/2")!
        
        let task = URLSession.shared.dataTask(with: url) {(data, response, error) in
            guard let data = data else { return }

            do
            {
                let decoder = JSONDecoder()
                let user = try decoder.decode([User].self, from: data as! Data)
                
                print(user[0].login)
                print(user[1].login)
            }
            catch
            {
                print("error array")
            }
            
            do
            {
                let decoder = JSONDecoder()
                let user = try decoder.decode(User.self, from: data as! Data)
                
                print(user.login)
            }
            catch
            {
                print("error object")
            }
        }
        
        task.resume()
    }
}
