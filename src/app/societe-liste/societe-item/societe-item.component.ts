import {Component, Input, OnInit} from '@angular/core';
import {Societe} from '../../shared/societe.model';

@Component({
  selector: 'app-societe-item',
  templateUrl: './societe-item.component.html',
  styleUrls: ['./societe-item.component.css']
})
export class SocieteItemComponent implements OnInit {
  @Input() societeDetail: Societe;

  constructor() { }

  ngOnInit() {
  }

}
