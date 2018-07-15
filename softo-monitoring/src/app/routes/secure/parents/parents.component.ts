import { NavTabLinks, NavTabLink } from '../../../lib/nav-tabs';

import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements NavTabLinks {
  navTabLinks: NavTabLink[] = [
    { label: 'Recherche', route: './search' },
    { label: 'Nouveau', route: './create' },
    { label: 'Importer', route: './import' },
  ];

}
