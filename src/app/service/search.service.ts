import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searched!: string;
  private subject = new Subject<any>();

  constructor() {}

  getSearched = (): Observable<any> => {
    return this.subject.asObservable();
  };

  setSearched = (nameOrId: string) => {
    this.searched = nameOrId;
    this.subject.next(this.searched);
  };
}
