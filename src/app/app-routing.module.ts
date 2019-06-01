import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './componentes/delete/delete.component';
import { GetComponent } from './componentes/get/get.component';
import { PostComponent } from './componentes/post/post.component';

const routes: Routes = [
  {path:'eliminar',component:DeleteComponent},
  {path:'mostrar',component:GetComponent},
  {path:'registrar',component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
