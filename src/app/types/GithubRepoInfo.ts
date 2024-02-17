// https://api.github.com/users/{username}/repos
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
};
