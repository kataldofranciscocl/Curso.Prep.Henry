// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

  function Usuario(opciones){
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  };

  //el método saludar "cuelga" de la clase Usuario
  Usuario.prototype.saludar = function(){
    return 'Hola, mi nombre es ' + this.nombre;
  };
  
  return Usuario;

}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function(){
    return 'Hello World!';
  };

}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

    String.prototype.reverse = function(){
      //variable donde almacenaremos la string invertida
      let stringReverse = '';
      //iteración inversa al objeto
      //contamos los elementos totales y restamos uno, para tener el numero correcto de elementos
      //le indicamos que haga la iteración hasta que llegue al elemento en la posición 0
      //vamos del total restando uno hasta cero
      for(i = this.length-1; i>=0; i-- ){
        //asignamos a la variable stringReverse ella misma (vacia) + cada caracter de la iteración.
        stringReverse = stringReverse + this.charAt(i);
      }
      return stringReverse;
    };
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida
};
