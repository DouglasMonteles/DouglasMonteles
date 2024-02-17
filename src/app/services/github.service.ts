import { Observable } from "rxjs";
import GithubRepoInfo from "../types/GithubRepoInfo";
import GithubRepoLanguage from "../types/GithubRepoLanguage";
import GithubUserInfo from "../types/GithubUserInfo";

export default interface IGithubService {

  getGithubUserInfo(username: string): Observable<GithubUserInfo>;

  getGithubRepoInfo(username: string): Observable<GithubRepoInfo[]>;

  getGithubRepoLanguage(username: string, repoName: string): Observable<GithubRepoLanguage>;

}
