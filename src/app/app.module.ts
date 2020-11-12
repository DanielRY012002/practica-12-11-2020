import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { AddTipoDocComponent } from './components/tipo-doc/add-tipo-doc/add-tipo-doc.component';
import { ListarTipoDocComponent } from './components/tipo-doc/listar-tipo-doc/listar-tipo-doc.component';
import { UpdateTipoDocComponent } from './components/tipo-doc/update-tipo-doc/update-tipo-doc.component';
import {HttpClientModule} from '@angular/common/http';
import { TipoDocService } from './services/tipo-doc.service';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    AddTipoDocComponent,
    ListarTipoDocComponent,
    UpdateTipoDocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TipoDocService],
  bootstrap: [AppComponent]
})
export class AppModule { }