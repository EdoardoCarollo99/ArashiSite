import { Component } from '@angular/core';

@Component({
  selector: 'app-iscrizione',
  templateUrl: './iscrizione.component.html',
  styleUrls: ['./iscrizione.component.css']
})
export class IscrizioneComponent {
  vantaggi: string[] = [
    'Lezioni di alta qualità in varie discipline: Judo, Combattimento Ravvicinato, Fit Boxe, e altro',
    'Istruttori esperti e certificati',
    'Strutture moderne e ben attrezzate',
    'Una comunità accogliente e motivante',
    'Eventi speciali e seminari con esperti del settore'
  ];

  passiIscrizione: string[] = [
    'Compila il modulo di iscrizione con i tuoi dati personali',
    'Procedi al pagamento sicuro',
    'Riceverai una conferma via email con tutti i dettagli'
  ];

  contattiSupporto: { tipo: string; valore: string; link?: string }[] = [
    { tipo: 'Email', valore: 'arashi21100@gmail.com', link: 'mailto:arashi21100@gmail.com' },
    { tipo: 'Telefono', valore: '+39 392 8111970 (Pippo) – 3923684001 (Paolo)', link: 'tel:+393928111970' },
    { tipo: 'Visita', valore: 'Vieni a trovarci in palestra durante gli orari di apertura' }
  ];
}
