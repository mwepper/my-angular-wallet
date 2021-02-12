import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadLink = 'societe'; // valeur par defaut

  onNavigate(link: string) {
    this.loadLink = link;
  }
}
