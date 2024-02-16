import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/impl/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getBasicInformation().subscribe(console.log)
  }

}
