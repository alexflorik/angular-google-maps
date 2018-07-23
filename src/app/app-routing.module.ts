import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PageComponent } from './page/page.component';
 
const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PageComponent, data: {page: 'home'}},
  {path: 'about', component: PageComponent, data: {page: 'about'}},
  {path: 'login', component: PageComponent, data: {page: 'login'}},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}