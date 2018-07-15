import { NavTabLinks, NavTabLink } from '../../../lib/nav-tabs';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  routeLinks: any[];
  activeLinkIndex = -1;

  constructor() { }

}
