import { OnInit } from '@angular/core';
import { PageUtil } from 'src/utils/page-util';

export abstract class BaseComponent implements OnInit
{
    constructor(protected _pageUtils : PageUtil) { }

    ngOnInit(): void { }

    ionViewWillEnter()
    {
        
    }
}