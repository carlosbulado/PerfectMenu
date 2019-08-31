import { Injectable } from '@angular/core';
import { PerfectNavigation } from 'src/utils/perfect-navigation';
import { PerfectAlert } from 'src/utils/perfect-alert';
import { ActivatedRoute } from '@angular/router';
import { UtilFunctions } from 'src/utils/util-functions';
import { ModalController } from '@ionic/angular';

@Injectable()
export class PageUtil
{
    constructor
    (
        public _navigation : PerfectNavigation,
        public _alerts : PerfectAlert,
        public _activedRoute : ActivatedRoute,
        public _utilFuncs : UtilFunctions,
        public _modalCtrl : ModalController,
        //public _storage : Storage
    )
    { }
}