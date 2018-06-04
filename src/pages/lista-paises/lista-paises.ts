import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePaisPage } from '../detalhe-pais/detalhe-pais';
import { RestPaisProvider } from '../../providers/rest-pais/rest-pais';

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
  providers: [
    RestPaisProvider
  ]
})
export class ListaPaisesPage {
  public Continente;
  public VetorPais: any[];
  public lista_paises = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private RestPaisProvider: RestPaisProvider) {
    this.Continente = this.navParams.get("Continente");
  }

  DetalhePais(ItemPais) {
    this.navCtrl.push(DetalhePaisPage, { "Item": ItemPais });
  }

  ionViewDidLoad() {
    this.RestPaisProvider.getContinente(this.Continente).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_paises = objeto_retorno;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
