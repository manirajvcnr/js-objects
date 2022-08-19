// for in iteration of objects

// only print key values
let mobile={brand:'realme',model:'x2',camera:'64mp',color:'green',processor:'snapdragon 730G',ram:'8gb'}

for(let key in mobile ){
    console.log(mobile[key]);
}

// print key and values
let laptop={brand:'lenovo',model:'idea pad',ram:'8gb',processor:'i3-11th gen',color:'silver'}

for(let property in laptop){
    console.log(property+":"+laptop[property]);
}

