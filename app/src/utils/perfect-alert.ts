import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable()
export class PerfectAlert
{
    constructor ( private _alertController : AlertController ) { }

    public async YesNoAlert(title : string, message : string, yesFunc? : Function, noFunc? : Function) {
        let alert = await this._alertController.create({
          header: title,
          message: message,
          buttons: [
            {
                text: 'Yes',
                handler: () => { if(yesFunc) yesFunc(); }
            },
            {
                text: 'No',
                handler: () => { if(noFunc) noFunc(); }
            }
          ]
        });
        
        await alert.present();
    }

    public async okAlert(title : string, message : string, okFunc? : Function)
    {
        let alert = await this._alertController.create({
            header: title,
            message: message,
            buttons: [
                {
                    text: 'Ok',
                    handler: () => { if(okFunc) okFunc(); }
                }
            ]
          });
          
          await alert.present();
    }
}