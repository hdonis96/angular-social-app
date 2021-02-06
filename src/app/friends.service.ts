import { Injectable } from '@angular/core';
import { Profiles } from './profiles';
import { FRIENDS } from './mock-friends-profiles';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  new_profile: Profiles;

  constructor() { }
  
  getFriends(): Profiles[] {
    return FRIENDS;
  }
  getProfile(id): Profiles {
     return FRIENDS[id];
  }
  addProfile(new_name, new_id, new_pic, new_loc, new_birth, new_work) {
    this.new_profile = {name: new_name, id: new_id, picture: new_pic, 
	    location: new_loc, birth_location: new_birth, work: new_work};
    FRIENDS.push(this.new_profile);
  }
}
