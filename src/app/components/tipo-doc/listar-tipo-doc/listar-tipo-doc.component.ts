import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoDocService } from 'src/app/services/tipo-doc.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-tipo-doc',
  templateUrl: './listar-tipo-doc.component.html',
  styleUrls: ['./listar-tipo-doc.component.css']
})
export class ListarTipoDocComponent implements OnInit {
  tipodocs:any;
  constructor(private tipodocService:TipoDocService,private router:Router){}
  ngOnInit(): void {
    this.listar();
  }
  delTipoDoc(num:number):void{
    Swal.fire({
      title:'Estas Seguro?',
      text:'No podras revertir esto!',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Yes, delete it!'
    }).then((result)=>{
      if(result.isConfirmed){
        this.tipodocService.deleteTipoDoc(num).subscribe(
          response=>{
            this.listar();
            Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado!',
              'success'
            )
          }
        )
      }
    })
  }
  listar():void{
    this.tipodocService.getTipoDocs().subscribe(
      (data)=>{
        this.tipodocs=data['CURSOR_TIPO_DOC'];
        console.log(this.tipodocs);
      }
    )
  }
}