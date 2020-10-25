import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  restaurants:any[]=[
      {
      name : "Bistrot des Gascons",
      image : "../assets/desGascons.png",
      image_icon : "../assets/desGascons_icon.png",
      },
  
      {
      name : "Les fous de l'île",
      image : "../assets/fousDeLIle.png",
      image_icon : "../assets/fousDeLIle_icon.png",
      },
  
      {
      name : "Bistrot Landais",
      image : "../assets/bistrotLandais.png",
      image_icon : "../assets/bistrotLandais_icon.png",
      },
  
      {
      name : "Villa 9-Trois",
      image : "../assets/villa9Trois.png",
      image_icon : "../assets/villa9Trois_icon.png",
      },
  
      {
      name : "Bistrot du Sommelier",
      image : "../assets/duSommelier.png",
      image_icon : "../assets/duSommelier_icon.png",
      }
  ]

  constructor() { }

  ngOnInit() {
  }

}
