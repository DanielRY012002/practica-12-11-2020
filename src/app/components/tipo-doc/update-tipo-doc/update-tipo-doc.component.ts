import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TipoDoc } from 'src/app/models/tipo-doc';
import { TipoDocService } from 'src/app/services/tipo-doc.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-tipo-doc',
  templateUrl: './update-tipo-doc.component.html',
  styleUrls: ['./update-tipo-doc.component.css']
})
export class UpdateTipoDocComponent implements OnInit {
  tipodocs:any;
  tipodoc:TipoDoc=new TipoDoc();
  constructor(private tipodocService:TipoDocService,private router:Router, private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    console.log("log");
  }
  cargarTipoDoc():void{
    this.activatedRoute.params.subscribe(params=>{
      let id=params['id'];
      if(id){
        this.tipodocService.getTipoDoc(id).subscribe(
          (data)=>{
            this.tipodocs=data['CURSOR_TIPO_DOC'];
            this.tipodoc.nombre=this.tipodocs[0].NOMBRE;
            this.tipodoc.id_tipo_doc=id;
          }
        )
      }
    })
  }
  modificarTipoDoc():void{
    this.tipodocService.updateTipoDoc(this.tipodoc).subscribe(
      respose=>{
        console.log(this.tipodoc);
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, update it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/listar'])
            Swal.fire(
              'Actualizado!',
              'El registro ha sido Modificado.',
              'success'
            )
          }
        })
      }
    )
  }
}