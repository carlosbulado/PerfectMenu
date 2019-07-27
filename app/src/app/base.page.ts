import { OnInit } from '@angular/core';
import { PageUtil } from '../utils/page-util';

export abstract class BasePage implements OnInit
{
    constructor(protected _pageUtils : PageUtil) { }

    ngOnInit(): void { }
}