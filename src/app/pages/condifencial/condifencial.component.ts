import { Component } from '@angular/core';

@Component({
  selector: 'app-condifencial',
  standalone: true,
  imports: [],
  templateUrl: './condifencial.component.html',
  styleUrl: './condifencial.component.css'
})
export class CondifencialComponent {

  logout(){
    sessionStorage.setItem('login','fasle')

    window.location.href = 'login'
  }

}
