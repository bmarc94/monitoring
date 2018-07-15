import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Search',
        link: './search',
        index: 1
      },
      {
        label: 'Create',
        link: './create',
        index: 2
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      console.log(this.router.url);
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
