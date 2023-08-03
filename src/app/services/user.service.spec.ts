import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserInfo } from '../types/UserInfo';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // The HttpClientTestingModule provides a fake implementation of HttpClient.
        // It does not actually send out HTTP requests. It merely intercepts them and records them internally.
        // https://testing-angular.com/testing-services/#testing-a-service-that-sends-http-requests
        HttpClientTestingModule,
      ],
      providers: [
        UserService,
      ]
    });
    service = TestBed.inject(UserService);

    // find the pending request
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that no unmatched requests are outstanding
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show the user information json', () => {
    const userInfoMock: UserInfo = {
      name: "Douglas",
      email: "email@domain.com",
      phone_number: "99999999999",
      linkedin: "https://www.linkedin.com/in/username",
      github: "https://github.com/username"
    };

    service.getBasicInformation().subscribe({
      next: (data) => {
        expect(data).not.toBeNull();

        expect(data.name).not.toBeNull();
        expect(data.email).not.toBeNull();
        expect(data.phone_number).not.toBeNull();
        expect(data.linkedin).not.toBeNull();
        expect(data.github).not.toBeNull();
      }
    });

    const req = httpTestingController.expectOne(UserService.BASIC_INFORMATION_URL);
    expect(req.request.method).toBe('GET');

    // Mock request data
    req.flush(userInfoMock);
  });
});
