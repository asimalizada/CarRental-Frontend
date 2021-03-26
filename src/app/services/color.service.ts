import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ColorResponseModel } from 'src/app/models/colorResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44314/api/brands/getall'

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
