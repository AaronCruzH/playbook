const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   /* 
   Sobre esta lista, realiza lo siguiente:

Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
Imprime el stack de cada explorer, usa FOR EACH*/
console.log("1.- Nombres de los explorers: ")
explorers.forEach(exp => console.log("• "+exp.name+"\n• "+exp.stack))

//3.- Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const expList = explorers.map(function(stck){return stck.stack});
console.log("3.- Lista de los stacks de los explorers:\n"+expList)

//4- Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const sxpJS = explorers.filter(eJS => eJS.stack.includes("js"))
//console.log("Hola bb: "+sxpJS.name)
//sxpJS.forEach(nombre => console.log("• "+nombre.name))
const listaExplorersJS = sxpJS.map(function(nombreExplorer){return nombreExplorer.name});
console.log("\n4.- Lista de explorers JS: "+listaExplorersJS+"\n")
listaExplorersJS.forEach(list => console.log("• "+list))

//*5.-Busca el primer explorer que sea de la CDMX, usa FIND
const firstCDMX = explorers.find(originPlace => originPlace.city.includes("CDMX"));
console.log("\n5.- El primer Explorer de la CDMX es: "+firstCDMX.name+"\n")

//*6.- Obtén la suma de todos los exercises_completed, usa REDUCE
const sumaExercises = explorers.map(exp => {return exp.exercises_completed})
const resultadoSumaEx = sumaExercises.reduce((acc,element) => acc+element,0)
console.log("6.- El total de ejercicios completados es: "+resultadoSumaEx+"\n")

//*7.- Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const validate = explorers.some(exp => exp.missions.frontend.exercisesFinished == true)
console.log("7.- Se ha encontrado un ejercicio finzalizados: "+validate+"\n")


/*8.- Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
   */
const validationOnboarding = explorers.every(exp => typeof exp.missions.onboarding.isFinished == true)
console.log("8.- Todos los Explorers han finalizado el onboarding: "+validationOnboarding)