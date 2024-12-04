import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  name!: string;
  email!: string;
  constructor() { }
}
