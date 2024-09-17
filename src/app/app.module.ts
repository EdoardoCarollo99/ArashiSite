import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { JudoComponent } from './pages/judo/judo.component';
import { CombattimentoRavvicinatoComponent } from './pages/combattimento-ravvicinato/combattimento-ravvicinato.component';
import { FitBoxeComponent } from './pages/fit-boxe/fit-boxe.component';
import { DifesaPersonaleComponent } from './pages/difesa-personale/difesa-personale.component';
import { SprayPeperoncinoComponent } from './pages/spray-peperoncino/spray-peperoncino.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JudoComponent,
    CombattimentoRavvicinatoComponent,
    FitBoxeComponent,
    DifesaPersonaleComponent,
    SprayPeperoncinoComponent,
    CookieBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
