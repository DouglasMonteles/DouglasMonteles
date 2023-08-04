import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { UserInfo } from 'src/app/types/UserInfo';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userInfo$: Observable<UserInfo>;

  constructor(
    private _userService: UserService
  ) {
    this.userInfo$ = this._userService.getBasicInformation();
  }

  ngOnInit(): void {

  }

}
