import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private getGroupsByIdEndpoint = `${environment.apiUrl}home/GetGroupsById`;

  constructor(private http: HttpClient) { }

  getGroups() {
    return undefined;
  }
}
