import { OnInit } from '@angular/core';
import { PerfectNavigation } from 'src/utils/perfect-navigation';
import { PerfectAlert } from 'src/utils/perfect-alert';

export abstract class BasePage implements OnInit
{
    constructor(protected navigation : PerfectNavigation, protected _alerts : PerfectAlert) { }

    ngOnInit(): void { }
}