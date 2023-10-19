import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string | undefined;
  password: string | undefined;
  

  onSubmit() {
    // Aquí puedes implementar la lógica de autenticación, por ejemplo, enviar los datos a un servidor
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
