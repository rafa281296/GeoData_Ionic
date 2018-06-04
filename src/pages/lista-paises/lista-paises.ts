import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePaisPage } from '../detalhe-pais/detalhe-pais';

/**
 * Generated class for the ListaPaisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-paises',
  templateUrl: 'lista-paises.html',
})
export class ListaPaisesPage {
  public Continente;
  public VetorPais: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Continente = this.navParams.get("Continente");

    var v1 = {
      nome: this.Continente,
      fullName: 'Afghanistan',
      code: 'AFG',
      listCodes: 'Afghan',
      language: 'IRN',
    };

    var v2 = {
      nome: this.Continente,
      fullName: 'Åland Islands',
      code: 'ALA',
      listCodes: 'Swedish',
      language: 'Ålandish',
    };

    var v3 = {
      nome: this.Continente,
      fullName: 'Isle of Man',
      code: 'IMN',
      listCodes: 'Manx',
      language: 'Northern Europe',
    };

    var v4 = {
      nome: this.Continente,
      fullName: 'Japan',
      code: 'JPN',
      listCodes: 'Eastern Asia',
      language: 'Japanese',
    };

    this.VetorPais = [v1, v2, v3, v4];
  }

  DetalhePais(ItemPais) {
    this.navCtrl.push(DetalhePaisPage, { "Item": ItemPais });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPaisesPage');
  }

}
