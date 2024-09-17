import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';

interface Discipline {
  name: string;
  kanji: string;
  description: string;
  route: string;
}

interface ScheduleDay {
  day: string;
  classes: string[];
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{

  private map!: L.Map;
  mobileMenuOpen = false;
  constructor(private router: Router) {}

  disciplines: Discipline[] = [
    { name: 'Judo', kanji: '柔道', description: 'Padroneggia la via della cedevolezza nella difesa personale e nello sport competitivo.', route:'/judo' },
    { name: 'Combattimento Ravvicinato', kanji: '接近戦', description: 'Impara tecniche efficaci per scenari di difesa personale nel mondo reale.',route:'/combattimentoravvicinato' },
    { name: 'Fit Boxe', kanji: 'フィットボクシング', description: 'Mettiti in forma con allenamenti ad alta intensità ispirati al pugilato.',route:'/fitboxe' },
    { name: 'Difesa Personale', kanji: '護身術', description: 'Sviluppa consapevolezza situazionale e abilità pratiche di difesa.',route:'/difesaperonale' },
    { name: 'Spray al Peperoncino', kanji: '催涙スプレー', description: 'Impara l\'uso sicuro ed efficace dello spray al peperoncino per l\'autodifesa.', route:'/sprypeporoncino' },
  ];

  schedule: ScheduleDay[] = [
    { day: 'Lunedì', classes: ['Judo (18:00 - 19:00) - Varesina', 'Judo (19:00 - 20:00) - Varesina'] },
    { day: 'Martedì', classes: ['Judo (18:00 - 19:00) - Palaghiaccio'] },
    { day: 'Mercoledì', classes: ['Judo (18:00 - 19:00) - Varesina', 'Judo (19:00 - 20:00) - Varesina'] },
    { day: 'Giovedì', classes: ['Preparazione Atletica (19:00 - 20:30) - Varesina'] },
    { day: 'Venerdì', classes: ['Judo (18:00 - 19:00) - Varesina', 'Judo (19:00 - 20:00) - Varesina'] },
    { day: 'Sabato', classes: ['Ju Jitsu (12:00 - 13:00) - Palaghiaccio, Fit Boxe (13:00 - 14:00) - Palaghiaccio'] },
    { day: 'Domenica', classes: ['Chiuso'] },
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  navigateTo(route: string) {
    scrollTo(0, 0);
    this.router.navigate([route]);
  }
  ngAfterViewInit() {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [45.80793001653513, 8.83520059398638],
      zoom: 16
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const marker = L.marker([45.80793001653513, 8.83520059398638]).addTo(this.map);
    marker.bindPopup("<b>Arashi Sports Club</b>").openPopup();
  }
}
