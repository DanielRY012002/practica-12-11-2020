import { Component } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap-tipo-doc-app';
  prueba():void{
    swal.fire('Any fool can use a computer');
  }
}
