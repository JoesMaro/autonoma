import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: any;
  password: any;

  servicio = inject(UsuariosService)

  login(form: NgForm){
    console.log(form.value)

    this.servicio.postlogin(form.value).subscribe( u => {
      console.log(u)

      if(u.accessToken !=''){
        sessionStorage.setItem("login","true")


        window.location.href = 'confidencial'

      }

    })
    
  }

}
