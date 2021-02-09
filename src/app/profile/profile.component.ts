import { Component, OnInit } from '@angular/core';
import { Profiles } from '../profiles';
import { FRIENDS } from '../mock-friends-profiles';
import { FriendsService } from '../friends.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  profileInfo: Profiles;

  constructor(private route: ActivatedRoute, private friendsService: FriendsService, private location: Location) { 
  }

  getProfile(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileInfo = this.friendsService.getProfile(id);
  }

  ngOnInit(): void {
    this.getProfile();
  }

}
