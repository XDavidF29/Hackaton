import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { ServicioProductoComponent } from "./ServicioProducto/ServicioProducto.component";

@NgModule({
  declarations: [ 
    AppComponent,
    UserComponent,
    ServicioProductoComponent
    
  ],
  imports: [
    BrowserModule,
  ]
})
export class AppModule { }