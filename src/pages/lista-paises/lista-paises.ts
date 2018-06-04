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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Continente = this.navParams.get("Continente");
  }

  DetalhePais(Continente){
    this.navCtrl.push(DetalhePaisPage,{"Continente":Continente});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPaisesPage');
  }

}
