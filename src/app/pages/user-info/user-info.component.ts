import { Component, OnInit, inject } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import IGithubService from 'src/app/services/github.service';
import { GithubService } from 'src/app/services/impl/github.service';
import { UserService } from 'src/app/services/impl/user.service';
import IUserService from 'src/app/services/user.service';
import GithubUserInfo from 'src/app/types/GithubUserInfo';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  userInfo$: Observable<GithubUserInfo>;

  private _userService: IUserService = inject(UserService);
  private _githubService: IGithubService = inject(GithubService);

  constructor() {
    const githubUserInfoObservable = this._githubService.getGithubUserInfo(
      environment.GITHUB_USERNAME
    );

    const userInfoObservable = this._userService.getBasicInformation();

    this.userInfo$ = forkJoin([
      githubUserInfoObservable,
      userInfoObservable,
    ]).pipe(
      map((result) => {
        const  [githubUserInfo, userInfo] = result;
        const githubUserInfoFull = {
          ...githubUserInfo,
          ...userInfo,
        };

        return githubUserInfoFull;
      })
    );
  }

  ngOnInit(): void {}
}
