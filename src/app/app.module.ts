import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillComponent } from './skill/skill.component';
import { ConectComponent } from './svg/conect/conect.component';
import { CloudComponent } from './svg/cloud/cloud.component';
import { MovileComponent } from './svg/movile/movile.component';
import { DesktopComponent } from './svg/desktop/desktop.component';
import { DatabaseComponent } from './svg/database/database.component';
import { GithubComponent } from './svg/github/github.component';
import { WwwComponent } from './svg/www/www.component';
import { WorldComponent } from './svg/world/world.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    SkillComponent,
    ConectComponent,
    CloudComponent,
    MovileComponent,
    DesktopComponent,
    DatabaseComponent,
    GithubComponent,
    WwwComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
