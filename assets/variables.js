var variable1 = "soy la variable 1";
console.log(variable1)
variable1 = 1212;
console.log(variable1);

const variable2 = "soy la variable 2";
console.log(variable2);
/* variable2 = 10 
   console.log(variable2); */

let nueva_variable2 = "mi nueva variable"; 
console.log(nueva_variable2);


function varTest() {
    var x = 31;
    if (true) {
        var x = 71; //
        console.log(x); // 71 Uriel
    }
    console.log(x); // 31 Gabi
}

/* varTest(); */

function varTest() {
    let x = 31;
    if (true) {
        let x = 71; //
        console.log(x); // 71 Gustavo
    }
    console.log(x); // 31 Miguel
}

const nuevaFuncion = () => {
    var x = 11;
    if (true) {
        var x = 71; //
        console.log(x); // 71 Uriel
    }
    console.log(x); // 31 Gabi                                                                                                                                                                                                                                                                                                                                                                             
}

nuevaFuncion();


/* letTest(); */

console.log(nueva_variable2);

const nombre = "Bernardino";
const apellidos = "Anastacio Tomas";

console.log(`Hola mi nobre es ${nombre} y mis apellidos son ${apellidos}`);
/* console.log("Hola mi nombre es " + nombre + "mis apellidos son "+ apellidos); */
const arreglo = [1, 2, 3, 4, 5];
console.log(arreglo);