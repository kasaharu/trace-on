import { Component, OnInit } from '@angular/core';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mogmog-header',
  templateUrl: './mogmog-header.component.html',
  styleUrls: ['./mogmog-header.component.scss'],
})
export class MogmogHeaderComponent implements OnInit {
  faSearch = faSearch;
  faUser = faUser;

  constructor() { }

  ngOnInit() {
  }

}
