import { IGenero } from './../models/IGenero.module';
import { GeneroService } from './../services/genero.service';
import { IListaFilmes, IFilmeApi } from './../models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { Router } from '@angular/router';
import { DadosService } from './../services/dados.service';
import { IFilme } from './../models/IFilme.module';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  title = 'Filmes';

  listaVideos: IFilme[] = [
    {
      nome: 'Parasita (2019)',
      lancamento: '07/11/2019',
      duracao: '2h 12m',
      classificacao: 85,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg',
      generos: ['Comédia', 'Thriller', 'Drama'],
      pagina: '/parasita',
    },
    {
      nome: 'O Auto da Compadecida (2000)',
      lancamento: '15/09/2000',
      duracao: '1h 44m',
      classificacao: 85,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg',
      generos: ['Aventura', 'Comédia'],
      pagina: '/compadecida',
    },
    {
      nome: 'Minha Mãe é uma Peça 3: O Filme (2019)',
      lancamento: '26/12/2019',
      duracao: '1h 44m',
      classificacao: 83,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zw77BFPGJ73Lig8GwRzYj1XHq53.jpg',
      generos: ['Comédia'],
      pagina: '/mae',
    },
    {
      nome: 'Aladdin (2019)',
      lancamento: '23/05/2019',
      duracao: '2h 9m',
      classificacao: 71,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1d8HShFOmSWDwvqtvPEZqzlZbYl.jpg',
      generos: ['Romance', 'Drama'],
      pagina: '/aladdin',
    },
    {
      nome: 'O Rei Leão (2019)',
      lancamento: '18/07/2019',
      duracao: '1h 58m',
      classificacao: 72,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wrHr8eEJYDAA7WYybyH162s4oZ4.jpg',
      generos: ['Família', 'Aventura', 'Animação'],
      pagina: '/leao',
    },
  ];

  listaFilmes: IListaFilmes;

  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoSerive: GeneroService,
    public route: Router
  ) {}

    buscarFilmes(evento: any){
      console.log(evento.target.value);
      const busca = evento.target.value;
      if(busca && busca.trim() !== ''){
        this.filmeService.buscarFilmes(busca).subscribe(dados =>{
          console.log(dados);
          this.listaFilmes = dados;
        });
      }
    }

  exibirFilme(filme: IFilmeApi) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'SIM, favoritar!',
          handler: () => {
            this.apresentarToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'green',
    });
    toast.present();
  }

  ngOnInit(){
    this.generoSerive.buscarGeneros().subscribe(dados => {
      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;
      });

      this.dadosService.guardarDados('generos', this.generos);
    });
  }
}
