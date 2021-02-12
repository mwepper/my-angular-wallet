import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Societe} from '../shared/societe.model';
import {SocieteListeService} from './societe-liste.service';


@Component({
  selector: 'app-societe-liste',
  templateUrl: './societe-liste.component.html',
  styleUrls: ['./societe-liste.component.css'],
  providers: [SocieteListeService]
})
export class SocieteListeComponent implements OnInit {
  socSelected: Societe;
  societes: Societe[];

  constructor(private societeListeService: SocieteListeService) { }

  ngOnInit() {
    this.societes = this.societeListeService.getSocieteListe();
  }

  onSelected(socEl: Societe) {
    this.socSelected = socEl;
  }

}
