(function(){
	//3- Declarar una funcion anónima autoejecutable que imprima en la consola el texto 'Hola Mundo'
		(function(){
			console.log('Hello World');

        //4- Crear una variable del tipo array
		})();
		var jugador_profesional  = [];

        //5- Crear una variable del tipo string
		var jugador_club = 'Contenido de la variable tipo string';
		console.log(jugador_club);

        //6- Crear una variable del tipo numerico
		var numero_jugador = '1';
		console.log(numero_jugador);

	    //7- Añadir dos elementos del tipo string dentro del array
		jugador_profesional.push('olimpia');
		jugador_profesional.push('tricampeon');

	    //8-Imprimir en consola el valor del array
		console.log(jugador_profesional);
		
		//9Crear una variable del tipo object
		var obj_jugador = {};

		//10Añadir los atributos descripcion y cantidad a la variable del tipo object
		obj_jugador.nombre='Roque';
		obj_jugador.apellido='santa cruz';
		obj_jugador.edad='35';
		obj_jugador.club='olimpia';

		console.log(obj_jugador);
	

	})();
