const curso = [{"name": "Julio","notas" : [5,6,6,5,6]},
                {"name": "Marta","notas" : [6,5,5,6,7]},
                {"name": "Aaron","notas" : [4,4,5,5,6]},
                {"name": "Sofia","notas" : [6,6,6,6,7]}];

let total = 0 ;
let total1 = 0;
let total2 = 0;
let total3 = 0;
let results = []
let pcurso = 0;

for( let promedio of curso[0].notas){
    total+=promedio
};
results.push(document.getElementById("prom").textContent = `${total/5}`) 
for( let promedio of curso[1].notas){
    total1+=promedio
};
results.push(document.getElementById("prom2").textContent  = `${total1/5}`) 

for( let promedio of curso[2].notas){
    total2+=promedio
};
results.push(document.getElementById("prom3").textContent = `${total2/5}`) 

for( let promedio of curso[3].notas){
    total3+=promedio
};
results.push(document.getElementById("prom4").textContent = `${total3/5}`) 

for( let result of results){
    pcurso+=result
};
document.getElementById("promC").textContent = `${parseFloat(pcurso)}`

let mejorprom = Math.max(...results)

document.getElementById("mejorProm").textContent = mejorprom







/* let notas = [5,6,6,5,6]
let total = 0


for(let promedio of notas){
    total+=promedio
}

document.getElementById("prom").textContent = `${total/5}` 
 */



/* const prom = () => {
    for (let nota of curso){
        if(nota=0,nota<curso.notas,nota++){
            nota*
            document.getElementsByClassName('promedio')`${nota/5}`
        }
    }
}
 */
