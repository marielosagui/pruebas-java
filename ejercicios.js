//registrar eventos de una persona y boolean si tuvo accidente

function accidente(){
    var persona=[];
    let day={
        events:["cook","sleep","running"],
        accident:false
    }
}

//funcion que agrege una entrada diaria en una jornada

let journal=[];
function addEntry(events,accident){
    journal.push(events,accident)
};
addEntry(["weekend","break","beer","peanuts"],true);
addEntry(["weekend","cooking"],false);

//tabla peanuts vs accidente  1|0//0|1

var tablita=(event)=>{
    var arrg=[0,0,0,0];
    for(let i=0;i<journal.length;i++){
        let index=1;
        if(journal[i].events.includes(events)) index+=2;
    }
    if (journal[i].accident)index=1;{
    arrg[index]++;}
    return arrg
}

//eventos sin repetir en mi diario

function jorunalEvents(journal){
    var events=[];
    for(let day of journal){ // al recorrer se va guardando en day
        for (let event of day.events);{ // arreglo para recorrer evento de cada dia
    if(!events.includes(event));{
    events.push(event);
}}}
return events;
}

//eliminar elemento de un arreglo
function remove(array, index){
    return array.slice (0, index).concat(array.slice(index+1));
}

//"209317".padstart(8,"0") ----> 00209317