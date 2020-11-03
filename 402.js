let lista = [
    {
        ime: "Ivan",
        prezime: "Ivić",
        upisan: true
    },
    {
        ime: "Marko",
        prezime: "Marković",
        upisan: false
    },
    {
        ime: "Marina",
        prezime: "Marinković",
        upisan: true
    },
    {
        ime: "Ana",
        prezime: "Anić",
        upisan: true
    },
    {
        ime: "Pero",
        prezime: "Perić",
        upisan: false
    },
    {
        ime: "Saša",
        prezime: "Sašič",
        upisan: false
    },
    {
        ime: "Miro",
        prezime: "Mirić",
        upisan: true
    },
    {
        ime: "Marija",
        prezime: "Mirić",
        upisan: false
    },
    {
        ime: "Lino",
        prezime: "Linić",
        upisan: true
    },
    {
        ime: "Filip",
        prezime: "Filipović",
        upisan: false
    }
   ];

function provjeri(lista,pojam,status){                         
    for(let i=0; i<lista.length; i++){
       let x = lista[i].ime.toLowerCase()                
       let y = lista[i].prezime.toLowerCase()                                                  
       if ((x.search(pojam.toLowerCase()) != -1 || y.search(pojam.toLowerCase()) != -1) && lista[i].upisan == status ) {
            return true
        }
    }
    return false
}

console.log(provjeri(lista, "ili", true)) 
console.log(provjeri(lista, "Lin", true)) 
console.log(provjeri(lista, "lipo", false)) 