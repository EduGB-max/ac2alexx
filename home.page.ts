import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  distancia: string = '';
  res: number = 0;

  peso: number = 0;
  tipoValor: number = 0;
  tipo: string = '';

  dias:string="";

  constructor(private alertController: AlertController) {}

  calcular() {
    this.tipoValor = 0;


    if(this.tipo == 'comum'){
      this.tipoValor =Number( this.distancia) * 1;
      this.dias = "Vai demorar 7 dias"
    }
    if (this.tipo === 'expresso') {
      this.tipoValor =Number( this.distancia) * 1.3;
      this.dias = "Vai demorar 3 dias"

    }


    this.res =
      4 * Number(this.peso) + Number(this.distancia) * 2.5 + this.tipoValor;

    if (this.peso >= 100) {
      this.res = this.res * 0.8;
      this.tipo = this.tipo + "(desconto do peso aplicado)"
    }

    this.presentAlert()
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.tipo,
      subHeader: this.dias,
      message: `Preço total: ${this.res} reais`,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
