import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DxTreeViewComponent } from 'devextreme-angular';
import { Publicas } from 'src/models/parametricas.model';
import { UsuarioService } from 'src/services/usuarios.service';

import { Service, MenuOpcion } from './menus.service';
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css'],
  providers: [Service],
  preserveWhitespaces: true
})


export class MenusComponent implements OnInit {
  @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;
  @Output() public opcionmenuseleccionada: EventEmitter<MenuOpcion> = new EventEmitter<MenuOpcion>();
  @Input() publicas: Publicas;

  menuopcion: MenuOpcion[] = [];
  selectedMenuOpcion: MenuOpcion[] = [];
  opcion: MenuOpcion;
  submenu: MenuOpcion;


  showCheckBoxesMode: string = "none";
  selectionMode: string = "single";
  selectNodesRecursive: boolean = false;
  selectByClick: boolean = true;

  vControlModulo: string;
  iditem: number = 1;


  constructor(service: Service, private usuarioservice: UsuarioService) {

  }

  treeViewSelectionChanged(e) {
    this.syncSelection(e.component);
  }

  treeViewContentReady(e) {
    this.syncSelection(e.component);
  }

  syncSelection(treeView) {
    const selectedMenuOpcion = treeView.getSelectedNodes()
      .map(node => node.itemData);
    this.selectedMenuOpcion = selectedMenuOpcion;


    if (this.selectedMenuOpcion != undefined && this.selectedMenuOpcion.length > 0) {
      if (this.selectedMenuOpcion[0].componente != '') {
        this.opcionmenuseleccionada.emit(this.selectedMenuOpcion[0]);
      }
    }
  }

  ngOnInit() {
    this.ConsultarPrivilegiosByRol(this.publicas.idRol);


  }

  ConsultarPrivilegiosByRol(idRol: number) {
    this.usuarioservice.GetListaPrivilegiosByRol(idRol).subscribe(
      result => {
        this.iditem = 1;


        for (let elemento of result.Result.Lista) {

          if (this.iditem == 1) //Es el primer registro
          {
            //Se crea la primer opción del menú (que en este caso será el Nivel 1)
            this.vControlModulo = elemento.descripcionModulo;
            this.inicializarOpcion();
            this.opcion.id = this.iditem;
            this.opcion.fullName = elemento.descripcionModulo;
            this.opcion.expanded = false;
            //Se crea el primer submenu
            this.iditem++;
            this.inicializarSubmenu();
            this.submenu.id = this.iditem;
            this.submenu.fullName = elemento.descripcionPrivilegio;
            this.submenu.expanded = false;
            this.submenu.componente = elemento.componente;

            this.opcion.items.push(this.submenu);

          }
          else {
            if (this.vControlModulo == elemento.descripcionModulo) {
              this.iditem++;
              this.inicializarSubmenu();
              this.submenu.id = this.iditem;
              this.submenu.fullName = elemento.descripcionPrivilegio;
              this.submenu.expanded = false;
              this.submenu.componente = elemento.componente;

              this.opcion.items.push(this.submenu);


            }
            else {
              this.menuopcion.push(this.opcion);
              this.vControlModulo = elemento.descripcionModulo;
              this.iditem++;
              this.inicializarOpcion();
              this.opcion.id = this.iditem;
              this.opcion.fullName = elemento.descripcionModulo;
              this.opcion.expanded = false;
              this.iditem++;
              this.inicializarSubmenu();
              this.submenu.id = this.iditem;
              this.submenu.fullName = elemento.descripcionPrivilegio;
              this.submenu.expanded = false;
              this.submenu.componente = elemento.componente;

              this.opcion.items.push(this.submenu);

            }



          }



        }
        this.menuopcion.push(this.opcion);

      },
      error => {

        console.error('Error [GetListaPrivilegiosByRol]');
        console.error(error);

      }
    );
  }




  inicializarOpcion() {
    this.opcion =
    {
      id: 0,
      fullName: '',
      expanded: false,
      componente: '',
      items: []

    };
  }

  inicializarSubmenu() {
    this.submenu =
    {
      id: 0,
      fullName: '',
      expanded: false,
      componente: '',
      items: []

    };
  }

}
