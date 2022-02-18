function uno(){
    var salufo = document.write('Hola a toddos');
    return salufo;
}

uno();


function dos (a, b,c ){
    var datos = document.write(a,b,c)

    return datos;
}

dos();


function cinco(...meses){
    for(let uno of  meses){
        document.write( uno + "<br>");

    }


}

cinco("Enero", "Febrero", "Mar")



function seis(nombre, precio, peso ){

    return nombre + precio + peso;

}

var primero = ['soldado', 25, 9];

document.write(seis(...primero));


"<br>"
//Arreglos

var unoArreglo = [

    "Lunes", 
    "Martes", 
    "Miercoles", 
    "Viernes", 
    "Sabado", 
    "lunes"
    
]


//pop mostrara el ultimo elemento
//document.write(unoArreglo.pop());
document.write(unoArreglo.pop());