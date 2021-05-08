import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  //array de lista de empleados
  listEmpleados: Empleado[] = [
    { legajo: 1, nombre: 'Juan', apellido: 'Pérez', sexo: 'Masculino', salario: 25000 },
    { legajo: 2, nombre: 'Marcos', apellido: 'Gonzalez', sexo: 'Masculino', salario: 55000 },
    { legajo: 3, nombre: 'Marta', apellido: 'Carvajal', sexo: 'Femenino', salario: 75000 },
    { legajo: 4, nombre: 'Jessika', apellido: 'Carvajal', sexo: 'Femenino', salario: 85000 },
    { legajo: 5, nombre: 'Victor', apellido: 'Zárate', sexo: 'Masculino', salario: 80000 },
    { legajo: 6, nombre: 'Ana', apellido: 'Zárate', sexo: 'Femenino', salario: 70000 }
  ]

  radioButtonSeleccionado = "Todos";

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number{
    return this.listEmpleados.length;
  }

  obtenerTotalFemenino(): number{
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerTotalMasculino(): number{
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }

  /* metodo para que viaje la info del componente hijo al padre */
  empleadoCountRadioButtonChange(radioButtonSelec: string): void {
    this.radioButtonSeleccionado = radioButtonSelec;
  }

}
