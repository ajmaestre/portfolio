import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuardGuard } from './auth/auth.guard';


const routesOptions: ExtraOptions = {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        scrollOffset: [0, 64],
}

const routes: Routes = [
                        { path: '', component: HomeComponent },
                        { path: 'login', component: LoginComponent },
                        { path: 'admin', component: AdminComponent, canActivate: [AuthGuardGuard] },
                        { path: '**', redirectTo: '' }
                      ]

@NgModule({
  imports: [RouterModule.forRoot(routes, routesOptions)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
