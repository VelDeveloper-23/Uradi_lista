function newElement() {
  let unesiTekst = document.querySelector("#myInput").value;
  //prazan string "" tj nije unesen tekst
  if (unesiTekst === "") {
    alert("Unesi tekst");
  } else {
    let Ul = document.querySelector("#myUL");
    let li = document.createElement("li");
    Ul.append(li); //dodavanje lise u unorder listu
    li.innerText = unesiTekst;
  }

  document.querySelector("#myInput").value = ""; //U input polje unosimo odredjeni tekst. Kada pritisnemo dugme ADD iz tog polja bi trebaloda se ukloni taj tekst...
}
