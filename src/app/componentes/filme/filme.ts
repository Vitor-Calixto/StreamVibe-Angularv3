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
  filme2 = {
nome: "Truque de Mestre",
imagem:  "/truque de mstre.jpg",
sinopse:"Mágicos que assaltam o banco e fazem o hulk de trouxa com ajuda do Morgan Freeman"
  }
  filme3 = {
nome: "300",
imagem:  "/300.jpg",
sinopse:"Só nego brabo indo p guerra proteger sua cidade contra um Africano safado "
  }

  filme4 = {
nome: "Coringa",
imagem:  "/coringa.jpg",
sinopse:"Um comediante que teve um dia ruim e se vinga matando todo mundo "
  }

  filme5 = {
nome: "Toy Story",
imagem:  "/toyStory.jpg",
sinopse:"Um bando de boneco macabro competindo p ficar no quarto de um moleque"
  }

  filme6 = {
nome: "Velozes e Furiosos",
imagem:  "/velozes e furiosos.jpg",
sinopse:"ta tudo tranquilo,quando surge algo que tira o the Rock da paz dele e obriga ele a voltar para a vida de assasino  "
  }

}
