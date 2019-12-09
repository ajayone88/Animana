import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
       state ('open', style({transform: 'translateX(0%)'})),
       state ('close', style({transform: 'translateX(0%)'})),
       transition('* <=> *', animate('0.5s'))
    ])
  ]
})

export class HeaderComponent implements OnInit {

  //Value used to show and hide the burger menu.
  showMenu: boolean;
  constructor(private eRef: ElementRef) { }

  ngOnInit() {
  }
  //This is used to detect the click out side the burger menu to close the menu.
  @HostListener('document:click', ['$event'])
    clickout(event) {
      if(!this.eRef.nativeElement.contains(event.target)) {
        this.showMenu = this.showMenu === true ? false : false ;
      }
  }


}
