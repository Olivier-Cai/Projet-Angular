import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-bateau-detail',
  templateUrl: './bateau-detail.page.html',
  styleUrls: ['./bateau-detail.page.scss'],
})
export class BateauDetailPage implements OnInit {
  
  bateaux

  constructor(public NavCtrl: NavController, public NavParams: NavParams, private http: HttpClient) {
    this.bateaux = NavParams.get('bateau');
    this.http.get("assets/data/bateaux.json").subscribe (data =>{
      this.bateaux = data;
    })
   }

  ngOnInit() {
  }

}
