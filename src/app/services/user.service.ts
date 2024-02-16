import { Observable } from "rxjs";
import { UserInfo } from "../types/UserInfo";

export default interface IUserService {

  getBasicInformation(): Observable<UserInfo>;

};
