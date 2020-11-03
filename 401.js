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

function provjeri(lista, pojam)  {
    for (let i=0; i<lista.length; i++)  {
        if (( lista[i].ime==pojam || lista[i].prezime==pojam) && lista[i].upisan==true) {
            return true
        }
    }
    return false
   }
   
   console.log(provjeri(lista, "Marko"))
   console.log(provjeri(lista, "Linić"))
   console.log(provjeri(lista, "Miro"))
   console.log(provjeri(lista, "Marica"))