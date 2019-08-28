var mostrar = document.getElementById("mostrar");

var pantalla = document.getElementById("pantalla");
var mayor = document.getElementById("mayor");
var menor = document.getElementById("menor");
//var cod = document.getElementById("cod");


/*mostrar.addEventListener("click", function() {
    var cod = document.getElementById("cod").value;
    var nombre = document.getElementById("nombre").value;
    var nota = document.getElementById("nota").value;

    

    var fila="<tr><td>"+cod+"</td><td>"+nombre+"</td><td>"+nota+"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tabla").appendChild(btn);
    document.getElementById("cod").value="";
    document.getElementById("nombre").value="";
    document.getElementById("nota").value="";
    var estudiantes = [];
    var file = {codigo:"'"+cod+"'" , nombre:"'" +nombre+"'",nota:"'"+nota+"'"};
    estudiantes.push(file);
    console.log(estudiantes);
   

});*/

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

        cell1.innerHTML = cod;
        cell2.innerHTML = nom;
        cell3.innerHTML = not;
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

   
   /* console.log(
        [].concat.apply([], estudiantes).length
    )*/

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