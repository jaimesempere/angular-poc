import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {HomeFactoryComponent} from "./pages/home-factory/home-factory.component";
import {HomeStrategyComponent} from "./pages/home-strategy/home-strategy.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'factory', component: HomeFactoryComponent},
  {path: 'strategy', component: HomeStrategyComponent},
  {path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
