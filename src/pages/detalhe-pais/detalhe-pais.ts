import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhePaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-pais',
  templateUrl: 'detalhe-pais.html',
})
export class DetalhePaisPage {
public Item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Item = this.navParams.get("Item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePaisPage');
  }

}
