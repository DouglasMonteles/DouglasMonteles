import { BehaviorSubject } from "rxjs";

export default interface GithubPagination {
  page: {
    perPage: number;
    actual: BehaviorSubject<number>;
  };
  totalItems: number;
}
