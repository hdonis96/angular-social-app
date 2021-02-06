import { Component, OnInit } from '@angular/core';
import { Profiles } from '../profiles';
import { FRIENDS } from '../mock-friends-profiles';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  profileInfo: Profiles;

  constructor(private friendsService: FriendsService) { 
    this.getProfile();
  }

  getProfile(): void {
    this.profileInfo = this.friendsService.getProfile(0);
  }

  ngOnInit(): void {
  }

}
