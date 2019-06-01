import { Component, OnInit } from '@angular/core';
import { cPerfil } from 'src/app/clases/cPerfil';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private http:HttpClient) { }

  private urljson = 'https://my-json-server.typicode.com/heriberto97/base-de-datos/perfiles';
  perfiles:cPerfil[]=[];

  obtenerDatos(){
    return  this.http.get(this.urljson).subscribe(
      (resp:cPerfil[]) => {
        this.perfiles = resp;
      });
  }

  ngOnInit() {
    this.obtenerDatos();
  }

}
