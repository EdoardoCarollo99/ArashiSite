import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent implements OnInit {
  showBanner = false;

  ngOnInit() {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      this.showBanner = true;
    }
  }

  acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    this.showBanner = false;
  }

  declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    this.showBanner = false;
    // Qui potresti implementare la logica per disabilitare i cookie non essenziali
  }
}
