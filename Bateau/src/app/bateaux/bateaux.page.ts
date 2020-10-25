import { Component, OnInit } from '@angular/core'; 
import { BateauDetailPage } from '../bateau-detail/bateau-detail.page';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {

  bateaux:any[]=[
      {
      id: 1,
      name : "De la Brise",
      image : "../assets/deLaBrise.png",
      image_icon : "../assets/deLaBrise_icon.png",
      },
  
      {
      id:2,
      name : "Saphir",
      image : "../assets/saphir.png",
      image_icon : "../assets/saphir_icon.png",
      },
  
      {
      name : "Gast Micher",
      image : "../assets/gastMicher.png",
      image_icon : "../assets/gastMicher_icon.png",
      },
  
      {
      name : "Aquilon",
      image : "../assets/aquilon.png",
      image_icon : "../assets/aquilon_icon.png",
      }
  ]

  constructor(public NavCtrl: NavController) { }

  ngOnInit() {
  }

  goToBateauDetail(){
    this.NavCtrl.navigateForward('/bateau-detail');
  }

}
