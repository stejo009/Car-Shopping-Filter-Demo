import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.css']
})
export class AddcarsComponent implements OnInit {
cars=['BMW', 'BUICK', 'Mazda', 'Chevrolet', 'Wolks Wagon'];
  constructor() { }

  ngOnInit() {
  }

}
