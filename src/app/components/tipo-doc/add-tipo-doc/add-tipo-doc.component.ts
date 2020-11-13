import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDoc } from 'src/app/models/tipo-doc';
import { TipoDocService } from 'src/app/services/tipo-doc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tipo-doc',
  templateUrl: './add-tipo-doc.component.html',
  styleUrls: ['./add-tipo-doc.component.css']
})
export class AddTipoDocComponent implements OnInit {
  tipodocModel:TipoDoc=new TipoDoc();
  constructor(private tipodocService:TipoDocService,private router:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit():void{
  }
  public create():void{
    this.tipodocService.addTipoDoc(this.tipodocModel).subscribe(
      response=>{
        this.router.navigate(['/listar'])
        Swal.fire('Nuevo Tipo Documento', `TipoDocumento ${this.tipodocModel.nombre} creado con exito`,"success")
      }
    )
  }
}