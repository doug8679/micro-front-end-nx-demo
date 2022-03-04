import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../interfaces/claim';

const API_URL = '';

@Injectable({
  providedIn: 'root'
})
export class ClaimsClientService {
  constructor() { }

  listClaims(): any {
    // Do some stuff...
    return null;
  }
}
