import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appTitle } from '../../configuration/Properties';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title = appTitle;
  public small: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.onWindowScroll();
  }

  goHome() {
    this.router.navigate([''])
  }

  @HostListener("body:scroll", [])
  onWindowScroll() {
    this.small = document.body.scrollTop > 0;
  }
}