import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info_pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any;

  constructor(private http: HttpClient) {
    // console.log('Servicio de info pagina listo');
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo() {
     // leer el archivo json
     this.http.get('assets/data/data_pagina.json')
     .subscribe( (resp: InfoPagina) => {
       this.cargada = true;
       this.info = resp;
      //  console.log(resp);
     });
   }

   private cargarEquipo() {
    // leer el archivo json
    this.http.get('https://angular-html-b833e.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {
      this.equipo = resp;
      // console.log(resp);
    });
   }
}
