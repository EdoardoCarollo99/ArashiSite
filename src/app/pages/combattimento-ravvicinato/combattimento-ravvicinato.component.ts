import { Component } from '@angular/core';

interface Technique {
  name: string;
  description: string;
}

@Component({
  selector: 'app-combattimento-ravvicinato',
  templateUrl: './combattimento-ravvicinato.component.html',
  styleUrls: ['./combattimento-ravvicinato.component.css']
})
export class CombattimentoRavvicinatoComponent {
  techniques: Technique[] = [
    { name: 'Colpi Diretti', description: 'Pugni e calci rapidi e precisi' },
    { name: 'Leve Articolari', description: 'Tecniche di immobilizzazione e controllo' },
    { name: 'Proiezioni', description: 'Metodi per sbilanciare e atterrare l\'avversario' },
    { name: 'Difese da Prese', description: 'Liberarsi da prese e strangolamenti' },
    { name: 'Combattimento a Terra', description: 'Tecniche di lotta e sottomissione al suolo' }
  ];

  benefits: string[] = [
    'Miglioramento delle capacità di autodifesa in situazioni reali',
    'Aumento della consapevolezza situazionale',
    'Sviluppo della forza, velocità e resistenza',
    'Miglioramento dei riflessi e della coordinazione',
    'Aumento dell\'autostima e della fiducia in se stessi',
    'Gestione dello stress in situazioni di alta pressione'
  ];
}
