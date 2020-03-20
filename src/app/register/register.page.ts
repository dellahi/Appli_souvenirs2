import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: any;

  constructor() {
  /*  this.registerForm = formBuilder.group({
      firstName: ['',Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      password: ['',Validators.compose([Validators.required, Validators.minLength(8),  Validators.maxLength(30) ])],
      confirm: ['',Validators.compose([Validators.required, Validators.minLength(8),  Validators.maxLength(30) ])]
  });*/

   }

  ngOnInit() {
  }

  /*async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Félicitations ; Vous êtes inscrit !',
      duration: 4000
    });
    toast.present();
  }*/


  onSubmit(form: NgForm) {
    if (this.registerForm.get('password').value != this.registerForm.get('confirm').value) {
      console.log('Password do not Match');
}
      console.log(form.value);
      console.log(form.valid);
  }

  validRegister(){
    location.href="/login";
  }

}
