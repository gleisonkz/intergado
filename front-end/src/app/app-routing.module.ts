import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPage } from 'src/app/pages/about/about.page';
import { HomePage } from 'src/app/pages/home/home.page';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'about', component: AboutPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
