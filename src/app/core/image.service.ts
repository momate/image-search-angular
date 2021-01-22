import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private API_KEY: string = environment.API_KEY;
  private UNSPLASH_API_URL :string = environment.API_URL;
  private URL :string = this.UNSPLASH_API_URL + this.API_KEY + '&query=';


  constructor(private _http: HttpClient) { }

  search(searchTerm){
    return this._http.get(this.URL + searchTerm);
  }
}
