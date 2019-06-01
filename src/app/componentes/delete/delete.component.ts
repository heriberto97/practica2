import { Component, OnInit } from '@angular/core';
import { cPerfil } from 'src/app/clases/cPerfil';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit {
  
  constructor(private http:HttpClient) {
    this.obtenerDatos();
   }

  private urljson = 'https://my-json-server.typicode.com/heriberto97/base-de-datos/perfiles';
  perfiles:cPerfil[]=[];

  obtenerDatos(){
    return  this.http.get(this.urljson).subscribe(
      (resp:cPerfil[]) => {
        this.perfiles = resp;
      });
  }
  eliminar(id:number){
    const urleliminar = this.urljson+'/'+id;
    const header = new HttpHeaders({'Content-type':'application/json'});
    this.perfiles.indexOf
    this.perfiles.filter(valor=> valor.id!==id);
    return this.http.delete(urleliminar,{headers:header}).subscribe(
      (val) =>{
        console.log('eliminando',val)
      },
      response =>{
        console.log('error',response)
      },
      ()=>{
        console.log('completado')
      }
    )
  }

  ngOnInit() {
  }
}
