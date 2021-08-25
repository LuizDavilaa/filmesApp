import { IFilme } from './../models/IFilme.module';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
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
    },
    {
      nome: 'O Auto da Compadecida (2000)',
      lancamento: '15/09/2000',
      duracao: '1h 44m',
      classificacao: 85,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m8eFedsS7vQCZCS8WGp5n1bVD0q.jpg',
      generos: ['Aventura', 'Comédia'],
    },
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

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
}
