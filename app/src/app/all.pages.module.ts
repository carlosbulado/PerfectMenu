import { NgModule } from '@angular/core';
import { HomePageModule } from './home/home.module';
import { AddMenuCardPageModule } from './add-menu-card/add-menu-card.module';
import { MenuCardPageModule } from './menu-card/menu-card.module';
import { MenuContentPageModule } from './menu-content/menu-content.module';
import { ActivityPageModule } from './activity/activity.module';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports:
  [
    HomePageModule,
    AddMenuCardPageModule,
    MenuCardPageModule,
    MenuContentPageModule,
    ActivityPageModule
  ],
  providers: [],
  bootstrap: []
})
export class AllPagesModule {}
