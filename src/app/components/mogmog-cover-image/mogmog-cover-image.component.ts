import { Component, OnInit } from '@angular/core';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mogmog-cover-image',
  templateUrl: './mogmog-cover-image.component.html',
  styleUrls: ['./mogmog-cover-image.component.scss'],
})
export class MogmogCoverImageComponent implements OnInit {
  faSearch = faSearch;
  faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit() {
  }

}
