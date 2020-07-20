import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
      path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
      path: 'home', component: RootComponent,
      children: [
          { path: '', component: HomeComponent }
      ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
