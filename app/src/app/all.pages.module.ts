import { NgModule } from '@angular/core';
import { HomePageModule } from './home/home.module';
import { AddMenuCardPageModule } from './add-menu-card/add-menu-card.module';
import { MenuCardPageModule } from './menu-card/menu-card.module';
import { MenuContentPageModule } from './menu-content/menu-content.module';
import { ActivityPageModule } from './activity/activity.module';
import { RegisterUserPageModule } from './register-user/register-user.module';
import { DashboardPageModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports:
  [
    HomePageModule,
    AddMenuCardPageModule,
    MenuCardPageModule,
    MenuContentPageModule,
    ActivityPageModule,
    RegisterUserPageModule,
    DashboardPageModule
  ],
  providers: [],
  bootstrap: []
})
export class AllPagesModule {}
