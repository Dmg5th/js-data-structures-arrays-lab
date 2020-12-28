// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendDriver(name){
    drivers.push(`${name}`); 
}

function destructivelyPrependDriver(name){
    drivers.unshift(`${name}`); 
}

function destructivelyRemoveLastDriver(){
    drivers.pop(`${name}`); 
}

function destructivelyRemoveFirstDriver(){
    drivers.shift(`${name}`);
}

function appendDriver(name){
    let newarr = []
    newarr.push( ...drivers,`${name}`); 
    return newarr; 
}

function prependDriver(name){
    let newarr = [];
    newarr.unshift(`${name}`,...drivers)
    return newarr 
}

function removeLastDriver(){
    let newarr = drivers.slice(0, drivers.length-1);
    return newarr
}

function removeFirstDriver(){
    let newarr = drivers.slice(1);
    return newarr
}
