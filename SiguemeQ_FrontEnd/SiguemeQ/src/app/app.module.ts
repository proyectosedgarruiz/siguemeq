import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncuestaService } from '../services/encuesta.service';
import { FormsModule } from '@angular/forms';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { SabanaencuestaComponent } from './sabanaencuesta/sabanaencuesta.component';
import { GestionUsuariosComponent } from './gestionusuarios/gestionusuarios.component';
import { GestionConvocatoriasComponent } from './gestionconvocatorias/gestionconvocatorias.component';
import { GestionHorasFormacionComponent } from './gestionhorasformacion/gestionhorasformacion.component';
import { GestionPrecioConsultaComponent } from './gestionprecioconsulta/gestionprecioconsulta.component';
import { GestionProfesionComponent } from './gestionprofesion/gestionprofesion.component';

import { DxPopupModule, DxButtonModule, DxTemplateModule,DxFormModule,DxRadioGroupModule, DxDataGridModule , DxSelectBoxModule,DxFileUploaderModule ,DxTreeViewModule, DxListModule,  DxCheckBoxModule,  DxTreeViewComponent } from 'devextreme-angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenusComponent } from './menus/menus.component';
import { DashboardpagesComponent } from './dashboardpages/dashboardpages.component';
import { HeaderComponent } from './header/header.component';
import { RecepcionpqrsComponent } from './recepcionpqrs/recepcionpqrs.component';



@NgModule({
  declarations: [
    AppComponent,
    AutenticacionComponent,
    AdministradorComponent,
    SabanaencuestaComponent,
    GestionUsuariosComponent,
    GestionConvocatoriasComponent,
    GestionHorasFormacionComponent,
    GestionPrecioConsultaComponent,
    GestionProfesionComponent,
    DashboardComponent,
    MenusComponent,
    DashboardpagesComponent,
    HeaderComponent,
    RecepcionpqrsComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DxPopupModule,
    DxButtonModule,
    DxTemplateModule,
    DxFormModule,
    DxRadioGroupModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxFileUploaderModule,
    DxTreeViewModule,
    DxListModule,
    DxTemplateModule,
    DxCheckBoxModule,
  
  ],
  providers: [EncuestaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
