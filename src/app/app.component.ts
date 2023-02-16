import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name: string = 'Juanma';
  public placeholder: string = 'Escriba algo aquí';
  public disabled: boolean = true;
  public imgSrc: string = "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-svg-vector.svg";
  public textButton: string = "Texto de prueba";
  public textNgModel: string = "";
  public studentsList: any = [
    { name: "Juanma Molins", state: "Notable" },
    { name: "Carolina Pérez", state: "Excelente" },
    { name: "Luís Molins", state: "Progresa adecuadamente" },
  ];
  public viewList: boolean = false;
  public showButtonDelete: boolean = true;

  constructor() {
    setInterval(() => this.name = 'Carolina', 3000 );
    setInterval(() => this.disabled = false, 3000 );
  }

  getAdd( numberOne: number, numberTwo: number ) {
    return numberOne + numberTwo
  }

  changeText(): void {
    this.textButton = 'Nuevo texto de prueba';
  }

  deleteList() {
    this.studentsList = [];
    this.showButtonDelete = false;
  }

  showList() {
    this.viewList = !this.viewList;    
  }
}
