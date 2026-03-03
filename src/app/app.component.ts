import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Import the specific icons your HTML is looking for
import { 
  faInstagram, 
  faFacebook, 
  faWhatsapp, 
  faYoutube, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faStore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true, // This is key for Angular 19
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

  // Define these so [icon]="faInstagram" in your HTML works
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faWhatsapp = faWhatsapp;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faMapMarkerAlt = faMapMarkerAlt;
  faStore = faStore;
}
