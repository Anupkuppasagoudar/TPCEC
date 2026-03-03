import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faInstagram, 
  faFacebook, 
  faWhatsapp, 
  faYoutube, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import { FloatingPopupComponent } from '../floating-popup/floating-popup.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    CommonModule, 
    FontAwesomeModule,
    FloatingPopupComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tpcec';

  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faWhatsapp = faWhatsapp;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faMapMarkerAlt = faMapMarkerAlt;
  faStore = faStore;
}
