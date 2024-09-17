import { Component } from '@angular/core';

@Component({
  selector: 'app-judo',
  templateUrl: './judo.component.html',
  styleUrls: ['./judo.component.css']
})
export class JudoComponent {
  techniques = [
    { name: 'Osoto Gari', description: 'Grande falciata esterna' },
    { name: 'Ippon Seoi Nage', description: 'Proiezione caricando sulle spalle' },
    { name: 'Uchi Mata', description: 'Proiezione interna della coscia' },
    { name: 'Harai Goshi', description: 'Spazzata d\'anca' },
    { name: 'Tomoe Nage', description: 'Proiezione circolare' }
  ];

  benefits = [
    'Miglioramento della forza fisica e della flessibilità',
    'Sviluppo dell\'equilibrio e della coordinazione',
    'Aumento dell\'autostima e della fiducia in se stessi',
    'Insegnamento di disciplina e rispetto',
    'Miglioramento delle capacità di difesa personale',
    'Promozione del benessere mentale e riduzione dello stress'
  ];
}
