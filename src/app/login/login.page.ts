import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private username: string;
  private password: string;
  
  constructor(private router : Router,public toastController: ToastController) { }

  ngOnInit() {
  }
  

  
  connexion(){
    if((this.username === 'toto') && (this.password === 'toto')){
        this.router.navigate(['/souvenirs']);
    }else{
        this.presentToast();
    }
  }
  
    async presentToast() {
    const toast = await this.toastController.create({
      message: 'Mot de passe ou identifiant incorrect. Veuillez réessayer',
      duration: 2000
    });
    toast.present();
  }
  
}
