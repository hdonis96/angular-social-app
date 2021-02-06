import { Component, OnInit } from '@angular/core';
import { Profiles } from '../profiles'
import { FRIENDS } from '../mock-friends-profiles';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.sass']
})
export class ChatListComponent implements OnInit {
  friends: Profiles[];
  yourProfile: Profiles;
  constructor(private friendsService: FriendsService) { }

  ngOnInit(): void {
    this.getFriends();
  }
  getFriends(): void {
    this.friends = this.friendsService.getFriends();
    this.yourProfile = this.friendsService.getProfile(0);
  }
  onSelect(): void {
    this.friendsService.addProfile('him', 12, 'fk', 'loc', 'birth', 'work');
  }

}
