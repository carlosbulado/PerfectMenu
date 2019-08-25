import { Injectable } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { UrlSerializer, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class PerfectNavigation extends NavController
{
    constructor
    (
        protected activatedRoute : ActivatedRoute,
        platform : Platform, 
        location : Location, 
        serializer : UrlSerializer,
        router? : Router | undefined
    )
    { 
        super(platform, location, serializer, router); 
    }

    private data: any;

    public push(url: string, data: any = '')
    {
        this.data = data;
        this.navigateForward('/' + url);
    }

    public back() { super.back({animated: true, animationDirection: 'forward'}); }

    public get(key? : string) { if(key && this.data) return this.data[key]; return this.data; }
    //public get(key? : string) { if(key) return this.activatedRoute.snapshot.paramMap.get(key); }
}