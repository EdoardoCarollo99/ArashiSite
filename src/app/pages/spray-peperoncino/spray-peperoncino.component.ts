import { Component } from '@angular/core';

interface Technique {
  name: string;
  description: string;
}

@Component({
  selector: 'app-spray-peperoncino',
  templateUrl: './spray-peperoncino.component.html',
  styleUrls: ['./spray-peperoncino.component.css']
})
export class SprayPeperoncinoComponent {
  techniques: Technique[] = [
    { name: 'Uso Corretto dello Spray', description: 'Tecniche per un utilizzo efficace e sicuro' },
    { name: 'Posizionamento e Distanza', description: 'Come posizionarsi e mantenere la distanza ottimale' },
    { name: 'Tecniche di Evasione', description: 'Movimenti per evitare contrattacchi' },
    { name: 'Combinazione con Difesa Fisica', description: 'Integrare l\'uso dello spray con tecniche di difesa personale' },
    { name: 'Gestione Post-Utilizzo', description: 'Procedure da seguire dopo l\'utilizzo dello spray' }
  ];

  benefits: string[] = [
    'Acquisizione di uno strumento efficace di autodifesa',
    'Aumento della sicurezza personale',
    'Apprendimento dell\'uso responsabile e legale dello spray',
    'Miglioramento della consapevolezza situazionale',
    'Sviluppo di competenze per la gestione dello stress in situazioni di pericolo',
    'Integrazione con altre tecniche di difesa personale'
  ];
}
