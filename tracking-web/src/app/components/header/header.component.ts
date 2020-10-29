import { Component, HostListener, OnInit } from '@angular/core';
import { appTitle } from '../../configuration/Properties';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title = appTitle;
  public small: boolean;

  constructor() { }

  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.small = window.scrollY > 0;
  }
}
