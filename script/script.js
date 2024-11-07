function ris(){
    let selezionato = document.querySelector("input[name='bn']:checked");
    let imm = "../img/" + document.querySelector("select").value;
    let immagine = document.querySelector("img");
    if(selezionato){
        selezionato = selezionato.value;
        imm += selezionato + ".jpg";
        immagine.src = imm;
        immagine.style.display = "block";
        console.log(imm);
    }else{
        alert("Inserire nuovamente i dati.")
    }
    
}