import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mygroup',
  templateUrl: './mygroup.component.html',
  styleUrls: ['./mygroup.component.css']
})
export class MygroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('mygroup-page');
    body.classList.add('off-canvas-sidebar');
    const card = document.getElementsByClassName('card')[0];
      setTimeout(function() {
          // after 1000 ms we add the class animated to the login/register card
          card.classList.remove('card-hidden');
      }, 700);
  }

}
