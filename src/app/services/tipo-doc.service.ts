import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoDoc } from '../models/tipo-doc';
@Injectable({
  providedIn: 'root'
})
export class TipoDocService {
  private httpHeaders = new HttpHeaders({'Conten-Type':'application/json'});
  private tipodocUrl:string='http://localhost:9090/tipodoc';
  constructor(private http:HttpClient){}
  getTipoDocs():Observable<TipoDoc[]>{
    return this.http.get<TipoDoc[]>(this.tipodocUrl+'/all');
  }
  getTipoDoc(id:number):Observable<Object>{
    return this.http.get(`${this.tipodocUrl}/${id}`);
  }
  addTipoDoc(tipodoc:TipoDoc):Observable<number>{
    return this.http.post<number>(this.tipodocUrl+"/add",tipodoc,{headers:this.httpHeaders});
  }
  deleteTipoDoc(id:number):Observable<number>{
    return this.http.delete<number>(this.tipodocUrl+"/delete/"+id,{headers:this.httpHeaders});
  }
  updateTipoDoc(tipodoc:TipoDoc):Observable<number>{
    return this.http.put<number>(`${this.tipodocUrl}/update/${tipodoc.id_tipo_doc}`,tipodoc,{headers:this.httpHeaders});
  }
}