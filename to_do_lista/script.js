function newElement() {
  let unesiTekst = document.querySelector("#myInput").value;

  let lista = document.createElement("li");
  lista.innerHTML = `${unesiTekst}`;
  document.querySelector("#myUL").append(lista);
}
