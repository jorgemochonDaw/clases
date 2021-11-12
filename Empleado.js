class Sede {
  constructor(codigo, denominacion, localidad) {
    this.codigo = codigo;
    this.denominacion = denominacion;
    this.localidad = localidad;
  }

  async validarCodigo() {
    const expresion = /^\d{3}$/;
    let promesa = new Promise((resolve, reject) => {
      if (expresion.test(this.codigo) == true) {
        resolve("Codigo correcto");
      } else {
        reject("Codigo incorrecto,solo 3 números");
      }
    });

    let resultado = await promesa;
    alert(resultado);
  }

  verSede() {
      return 'Codigo: ' + this.codigo + ' Denominacion: ' + this.denominacion + ' Localidad: ' + this.localidad;
  }
}

class Empleado extends Sede {
  constructor(
    nombre,
    dni,
    departamento,
    sueldoAnual,
    codigo,
    denominacion,
    localidad
  ) {
    super(codigo, denominacion, localidad);
    this.nombre = nombre;
    this.dni = dni;
    this.departamento = departamento;
    this.sueldoAnual = sueldoAnual;
  }

  verDatos() {
    return (
      "Nombre: " +
      this.nombre +
      " Dni: " +
      this.dni +
      " Departamento " +
      this.departamento
    );
  }

  verSueldo(sueldo) {
    if (this.sueldoAnual > sueldo) {
      return (
        'Nombre: ' +
        this.nombre +
        ' Dni: ' +
        this.dni +
        ' Departamento ' +
        this.departamento + 
        ' Sede : ' + 
        this.verSede()
      );
    }
  }
}

const empleado1 = new Empleado(
  'Jorge',
  '02343E',
  'Id',
  3000,
  1839,
  'S.A',
  'Madrid'
);

const empleado2 = new Empleado(
    'Coco',
    '02883E',
    'Id',
    2000,
    139,
    'S.A',
    'Pamplona'
  );

const section = document.querySelector("#section");
let pDatos = document.createElement("p");
let pSueldo = document.createElement("p");

empleado1.validarCodigo().catch((error) => alert(error));
let verDatos = empleado1.verDatos();
let mostrarSueldo = empleado1.verSueldo(900);
pDatos.textContent = verDatos;
section.appendChild(pDatos);
pSueldo.textContent = mostrarSueldo;
section.appendChild(pSueldo);

let pDatos2 = document.createElement("p");
let pSueldo2 = document.createElement("p");
empleado2.validarCodigo().catch((error) => alert(error));
let verDatos2 = empleado2.verDatos();
let mostrarSueldo2 = empleado2.verSueldo(900);
pDatos2.textContent = verDatos2;
section.appendChild(pDatos2);
pSueldo2.textContent = mostrarSueldo2;
section.appendChild(pSueldo2);
