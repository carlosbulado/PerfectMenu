import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { PipesModule } from 'src/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'activity', loadChildren: './activity/activity.module#ActivityPageModule' },
  { path: 'menu-card', loadChildren: './menu-card/menu-card.module#MenuCardPageModule' },
  { path: 'menu-content', loadChildren: './menu-content/menu-content.module#MenuContentPageModule' },
  { path: 'add-menu-card', loadChildren: './add-menu-card/add-menu-card.module#AddMenuCardPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    PipesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
