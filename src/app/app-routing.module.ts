import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTipoDocComponent } from './components/tipo-doc/add-tipo-doc/add-tipo-doc.component';
import { ListarTipoDocComponent } from './components/tipo-doc/listar-tipo-doc/listar-tipo-doc.component';
import { UpdateTipoDocComponent } from './components/tipo-doc/update-tipo-doc/update-tipo-doc.component';

const routes: Routes = [
  {path:'listar',component:ListarTipoDocComponent},
  {path:'tipodoc/add', component:AddTipoDocComponent},
  {path:'editar/:id', component:UpdateTipoDocComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
