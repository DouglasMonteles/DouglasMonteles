import { Observable } from "rxjs";

// https://api.github.com/users/{username}/repos?page={page}&per_page={per_page}
export default interface GithubRepoInfo {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    html_url: string;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  language: string;
  languages_url: string;
  contributors_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  visibility: string;
  default_branch: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  languages$: Observable<string[]>;
};
