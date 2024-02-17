// https://api.github.com/users/{username}
export default interface GithubUserInfo {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  location: string;
  email: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  linkedin: string;
};
