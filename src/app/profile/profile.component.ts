import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  yourName = 'Allan Donis Guillen';
  profileInfo = {
     location: 'Rocklin, CA',
     birth_location: 'Guatemala'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
