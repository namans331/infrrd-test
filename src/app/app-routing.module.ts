import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AuthenticationGuard } from './shared/gaurds/authentication.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'training-portal', pathMatch: 'full'
  },
  {
    path: 'training-portal', component: HomeComponent,
    children: [
      {
        path: 'admin', loadChildren: () => import('./admin-section/admin-section.module').then(m => m.AdminSectionModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'general', loadChildren: () => import('./general-section/general-section.module').then(m => m.GeneralSectionModule),
        canActivate: [AuthenticationGuard]
      }
    ]
  },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
