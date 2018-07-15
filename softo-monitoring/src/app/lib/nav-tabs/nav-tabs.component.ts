import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavTabLink } from '.';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.css']
})
export class NavTabsComponent implements OnInit {
  @Input() navTabLinks: NavTabLink[];
  routeLinks: any[];
  activeIndex = -1;

  constructor(private router: Router) { }

  ngOnInit() {
    this.activeIndex = this.initActiveIndex();
  }

  initActiveIndex(): number {
    return this.navTabLinks.indexOf(this.navTabLinks.find(navTab => this.router.url.indexOf(navTab.route.replace('.', '')) >= 0));
  }

}



  // ngOnInit(): void {
  //   console.log(this.router.url);
  //   /*this.router.events.subscribe((res) => {
  //     console.log(this.router.url);
  //     this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
  //   });*/
  // }
