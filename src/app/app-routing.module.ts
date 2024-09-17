import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Importa il componente Home
import { JudoComponent } from './pages/judo/judo.component';
import { CombattimentoRavvicinatoComponent } from './pages/combattimento-ravvicinato/combattimento-ravvicinato.component';
import { FitBoxeComponent } from './pages/fit-boxe/fit-boxe.component';
import { DifesaPersonaleComponent } from './pages/difesa-personale/difesa-personale.component';
import { SprayPeperoncinoComponent } from './pages/spray-peperoncino/spray-peperoncino.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Rotta di default che reindirizza alla Home Page
  { path: 'home', component: HomeComponent },
  { path: 'judo', component: JudoComponent },
  { path: 'combattimentoravvicinato', component: CombattimentoRavvicinatoComponent },
  { path: 'fitboxe', component: FitBoxeComponent },
  { path: 'difesaperonale', component: DifesaPersonaleComponent },
  { path: 'sprypeporoncino', component: SprayPeperoncinoComponent },              // Rotta per la Home Page
  // Altre rotte possono essere aggiunte qui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
