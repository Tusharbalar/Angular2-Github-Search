import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  
  private username = "Tusharbalar";

  constructor(private _http : Http) {
    console.log("Github service started...")
  }

  getUser() {
    return this._http.get("https://api.github.com/users/" + this.username)
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get("https://api.github.com/users/" + this.username + "/repos")
      .map(res => res.json());
  }

  updateUsername(username : any) {
    this.username = username;
  }
}