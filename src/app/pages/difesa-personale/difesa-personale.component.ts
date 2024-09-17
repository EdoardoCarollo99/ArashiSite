import { Component } from '@angular/core';

interface Technique {
  name: string;
  description: string;
}

@Component({
  selector: 'app-difesa-personale',
  templateUrl: './difesa-personale.component.html',
  styleUrls: ['./difesa-personale.component.css']
})
export class DifesaPersonaleComponent {
  techniques: Technique[] = [
    { name: 'Tecniche di Evasione', description: 'Movimenti per evitare attacchi e creare distanza' },
    { name: 'Liberazione da Prese', description: 'Metodi per liberarsi da diverse tipologie di prese' },
    { name: 'Colpi di Difesa', description: 'Colpi rapidi ed efficaci per neutralizzare l\'aggressore' },
    { name: 'Uso di Oggetti Comuni', description: 'Utilizzo di oggetti quotidiani per la difesa' },
    { name: 'Tecniche Vocali', description: 'Uso della voce per scoraggiare l\'aggressore e attirare attenzione' }
  ];

  benefits: string[] = [
    'Aumento della sicurezza personale e dell\'autostima',
    'Miglioramento della consapevolezza dell\'ambiente circostante',
    'Sviluppo di riflessi e reazioni rapide',
    'Apprendimento di tecniche pratiche e facilmente applicabili',
    'Miglioramento della forma fisica e della coordinazione',
    'Acquisizione di competenze per gestire situazioni di stress'
  ];
}
