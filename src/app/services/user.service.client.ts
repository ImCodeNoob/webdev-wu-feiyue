import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
// import {environment} from "../../environments/environment";
import {environment} from "../../environments/environment.prod";

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;


  // users: User[] = [
  //   new User('123', 'alice', 'alice', 'Alice', 'Wonder'),
  //   new User('234', 'bob', 'bob', 'Bob', 'Marley'),
  //   new User('345', 'charly', 'charly', 'Charly', 'Garcia'),
  //   new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi'),
  //
  // ];

  createUser(user: User) {
    // this.users.push(new User(user._id, user.username, user.password, user.firstName, user.lastName));
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  // createUser2(user: any) {
  //   user._id = Math.random();
  //   this.users.push(user);
  //   return user;
  // }

  findUserById(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url).map(
      (res: Response) => {
        const data = res.json();
        return data;
      }
    );
  }

  findUserByUsername(userName: String) {
    const url = this.baseUrl + '/api/user?username=' + userName;
    return this.http.get(url).map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  findUserByCredentials(username: String, password: String) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url).map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  // updateUser(user: User) {
  //   const url = this.baseUrl + '/api/user/' + user._id;
  //   return this.http.put(url, user).map((response: Response) => {
  //     return response.json();
  //   });
  // }
  updateUser(userId: String, user: User) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user).map((response: Response) => {
      return response.json();
    });
  }

  // deleteUserById(userId: String) {
  //   const url = this.baseUrl + '/api/user/' + userId;
  //   return this.http.delete(url).map(
  //     (res: Response) => {
  //       return res.json();
  //     }
  //   );
  // }
  deleteUser(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }
}
