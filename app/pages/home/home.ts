//https://devdactic.com/ionic-2-drag-and-drop/

import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Dragula, DragulaService} from "../../../node_modules/ng2-dragula/ng2-dragula"

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [Dragula],
  providers: [DragulaService]
})
export class HomePage {
  q1 = [];
  q2 =[];
  constructor(public navCtrl: NavController, private alertCtrl:AlertController, private dragularService: DragulaService) {

    for(var i = 0; i<20; i++){
      this.q1.push("1. <"+i+">");
      this.q2.push("2. <"+i+">");
    }

    dragularService.drop.subscribe((value) => {
      console.log(value);
      let alert = this.alertCtrl.create({
        title: 'Item moved',
        subTitle: 'So much fun!',
        buttons: ['OK']
      });

      alert.present();
    })
  }
}
