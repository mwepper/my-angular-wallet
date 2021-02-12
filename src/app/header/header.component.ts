import {Component, EventEmitter, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()linkSelect = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(link: string){
    this.linkSelect.emit(link);
  }

}
