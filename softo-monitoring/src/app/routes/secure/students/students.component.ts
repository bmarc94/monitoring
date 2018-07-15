import { Component } from '@angular/core';
import { NavTabLinks, NavTabLink } from '../../../lib/nav-tabs/nav-tab-link';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements NavTabLinks {
  navTabLinks: NavTabLink[] = [
    { label: 'Recherche', route: './search' },
    { label: 'Nouveau', route: './create' },
    { label: 'Importer', route: './import' },
  ];
}
