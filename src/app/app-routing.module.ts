import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routesOptions: ExtraOptions = {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        scrollOffset: [0, 64],
}

const routes: Routes = [
                        { path: '', redirectTo: 'home', pathMatch: 'full' },
                        { path: 'home', component: HomeComponent}
                      ]

@NgModule({
  imports: [RouterModule.forRoot(routes, routesOptions)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
