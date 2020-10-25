import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  constructor(public http: HttpClient) { 
    this.getData('https://us-central1-projetbateau-d52df.cloudfunctions.net/products/')
    .subscribe((data) => {
      console.log(data);
    })
  }

  getData(URL: string){
    return this.http.get(URL);
  }

  ngOnInit() {
  }

}
