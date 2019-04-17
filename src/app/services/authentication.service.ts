import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {User} from '../models';
import {Observable} from 'rxjs';

@Injectable()

export class AuthenticationService {
  currentUser: User;
  readonly HOST = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    this.http.post<User>(this.HOST + `/api/users/authenticate`, {username: username, password: password})
      .subscribe(user => {
        console.log(user);
        this.currentUser = user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    this.currentUser = null;
  }
  getCurrentUser(): User {
    return this.currentUser;
  }
  register(newUser: User) {
    return this.http.post<User>(`/api/users/register`, newUser)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.currentUser = user;
        }

        return user;
      }));
  }
}
