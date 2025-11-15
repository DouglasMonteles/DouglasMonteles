export default interface GithubUserRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  fork: boolean;
  html_url: string;
  languages_url: string;
  topics: Array<string>;
  language: string;
  homepage: string;
  stargazers_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}