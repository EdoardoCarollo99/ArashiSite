import { Component } from '@angular/core';

interface Technique {
  name: string;
  description: string;
}

@Component({
  selector: 'app-fit-boxe',
  templateUrl: './fit-boxe.component.html',
  styleUrls: ['./fit-boxe.component.css']
})
export class FitBoxeComponent {
  techniques: Technique[] = [
    { name: 'Jab', description: 'Colpo diretto veloce con il pugno avanzato' },
    { name: 'Cross', description: 'Pugno potente con il braccio posteriore' },
    { name: 'Hook', description: 'Gancio laterale con movimento circolare' },
    { name: 'Uppercut', description: 'Colpo ascendente dal basso verso l\'alto' },
    { name: 'Combinazioni', description: 'Sequenze di colpi per migliorare coordinazione e resistenza' }
  ];

  benefits: string[] = [
    'Miglioramento della forma fisica e perdita di peso',
    'Aumento della resistenza cardiovascolare',
    'Tonificazione muscolare di tutto il corpo',
    'Riduzione dello stress e miglioramento dell\'umore',
    'Sviluppo della coordinazione e dell\'agilità',
    'Apprendimento di tecniche base di autodifesa'
  ];
}
