import { Component } from '@angular/core';

@Component({
  selector: 'app-filme',
  imports: [],
  templateUrl: './filme.html',
  styleUrl: './filme.css'
})
export class Filme {

alternarFavorito(){
  this.filme1.favorito = !this.filme1.favorito
}

  filme1 = {
nome: "Tropa de Elite",
imagem: "/tp.jpg",
sinopse:"Vão passar uns traficantes para o papa dormir no Morro",
favorito: false

  }
//   filme2 = {
// nome: "Truque de Mestre",
// imagem:  "/truque de mstre.jpg",
// sinopse:"Mágicos que assaltam o banco e fazem o hulk de trouxa com ajuda do Morgan Freeman"
//   }
//   filme3 = {
// nome: "300",
// imagem:  "/300.jpg",
// sinopse:"Só nego brabo indo p guerra proteger sua cidade contra um Africano safado "
//   }

}
