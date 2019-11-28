var mostrar = document.getElementById("mostrar");
var pantalla = document.getElementById("pantalla");
var mayor = document.getElementById("mayor");
var menor = document.getElementById("menor");

document.getElementById("registrar").addEventListener("click", registro);
var estudiantes = [];

/* Funcion que da alta a los tutores */
function registro() {
    var cod = document.getElementById("cod").value;
    var nom = document.getElementById("nombre").value;
    var not = document.getElementById("nota").value;
   
    estudiantes.push({ "codigo": cod, "nombre": nom, "nota": not });

    /* codigo para incertar los datos en la tabla     */
    var tab = document.getElementById("tabla"); {
        var row = tab.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = cod;
        cell2.innerHTML = nom;
        cell3.innerHTML = not;
        cell4.innerHTML = '<td><button onclick="editarVehiculo(\'' + vehiculo.placa + '\');">Editar</button></td>';
        document.getElementById("cod").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("nota").value = "";

    }
}

promedio.addEventListener("click", function () {

	let suma = 0;
	for (var i = 0; i < estudiantes.length; i++) {
		suma += parseInt(estudiantes[i].nota)
	    console.log(suma);
    }
  
	promedio = suma / estudiantes.length;
    pantalla.innerHTML = promedio;

})

mayor.addEventListener("click", function () {
    var max = { codigo: -1, nombre: "", nota: 0 };
    for (i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nota > max.nota) {
            max = estudiantes[i];
        console.log(max)
        }
    }
    pantalla.innerHTML = max.codigo + "<br>" + max.nombre + "<br>" + max.nota;
})


menor.addEventListener("click", function () {
    var min = { codigo: +1, nombre: "", nota: 11 };
    for (i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nota < min.nota) {
            min = estudiantes[i];
        }
    }
    pantalla.innerHTML = "<hr>" + min.codigo + "<br>" + min.nombre + "<br>" + min.nota;
})