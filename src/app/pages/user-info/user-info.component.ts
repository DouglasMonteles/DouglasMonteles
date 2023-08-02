import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userInfo$: Observable<any>;

  constructor(
    private _userService: UserService
  ) {
    this.userInfo$ = this._userService.getBasicInformation();
  }

  ngOnInit(): void {

  }

}
