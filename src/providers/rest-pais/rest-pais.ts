import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the RestPaisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestPaisProvider {
  private baseApiPath = "https://restcountries.eu/rest/v2/"

  constructor(public http: Http) {
    console.log('Hello RestPaisProvider Provider');
  }
 
    getContinente(Continente) {
      if (Continente == 'all'){
        return this.http.get(this.baseApiPath + Continente);
  
      }
      return this.http.get(this.baseApiPath + "region/" + Continente);
      }

}
