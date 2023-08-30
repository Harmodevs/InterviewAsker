import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'demo', component: DemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
