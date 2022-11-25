/* Ingresar un año por teclado. Mostrar si el año es Bisiesto o no; si es bisiseto, mostrar los proximos años bisiestos (4), */



let year = parseInt (prompt ("Ingresa una año, para averiguar si es Bisiesto"))

let listyears = ""


while (typeof year == "number") {

    if  (year <= 0 ) {
            
        year = parseInt ( prompt ("Ingresa un año mayor al año 0"))
        
    }

    else if (isNaN (year)) {

        year = parseInt ( prompt ("Ingresa un año en numeros (ejemplo: 1920) :"))

    }

    else if ( ( year % 4 == 0 ) && ( (year % 100 != 0 ) || ( year % 400 == 0) ) )  {
        
         
         for (let i = (year + 4) ; i <= (year + 16); i+=4) {
             
             listyears = listyears + i + ", " 
             
            }
            
            
        alert ("El año: " + year + ", es bisiesto, los proximos 4 años bisiestos son: " + listyears )

        break
            
        }
        
    else {
            alert("El año: " + year + ", No es bisiesto")
        
            break
        }
        
}
    



