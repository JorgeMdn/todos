import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private toastController: ToastController) {}

  toast = async (msg: string, seconds = 5, btn?: any) => {
    let opts = {
      message: msg,
      duration: seconds * 1000,
    };

    if (btn) {
      opts['buttons'] = [
        {
          text: btn.text,
          role: btn.role, //'cancel',
          handler: btn.handler,
        },
      ];
    }

    const toast = await this.toastController.create(opts);
    toast.present();
  };
}
