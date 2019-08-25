import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PipesModule } from 'src/pipes/pipes.module';
import { HomePage } from './home/home.page';
import { AllPagesModule } from './all.pages.module';
import { ActivityPage } from './activity/activity.page';
import { MenuCardPage } from './menu-card/menu-card.page';
import { MenuContentPage } from './menu-content/menu-content.page';
import { AddMenuCardPage } from './add-menu-card/add-menu-card.page';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'home',
    // pathMatch: 'full'
    component: HomePage
  },
  {
    path: 'home',
    // loadChildren: './home/home.module#HomePageModule'
    component: HomePage
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
    // component: ListPage
  },
  {
    path: 'activity',
    // loadChildren: './activity/activity.module#ActivityPageModule'
    component: ActivityPage
  },
  {
    path: 'menu-card',
    // loadChildren: './menu-card/menu-card.module#MenuCardPageModule'
    component: MenuCardPage
  },
  {
    path: 'menu-content',
    // loadChildren: './menu-content/menu-content.module#MenuContentPageModule'
    component: MenuContentPage
  },
  {
    path: 'add-menu-card',
    // loadChildren: './add-menu-card/add-menu-card.module#AddMenuCardPageModule'
    component: AddMenuCardPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    PipesModule,
    AllPagesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
