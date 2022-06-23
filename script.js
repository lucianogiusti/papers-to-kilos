const cantidadMuestras = document.getElementById("cantidad-muestras");
const showResult = document.getElementById("show-result");

let cantidadPapeles = [];
let kilosTotal = [];

//Wait for page to finish loading
window.addEventListener("load", function () {
  //Run function when you submit form
  document.getElementById("form").addEventListener("submit", function (e) {
    //Stop the form from submitting:
    e.preventDefault();

    //Get your input value
    const resultado = document.querySelector(
      'input[name="analisis"]:checked'
    ).value;

    resultado == "maiz"
      ? cantidadPapeles.push(`${cantidadMuestras.value * 6}`) &&
        kilosTotal.push(+cantidadPapeles / 125)
      : resultado == "girasol"
      ? cantidadPapeles.push(`${cantidadMuestras.value * 4}`) &&
        kilosTotal.push(+cantidadPapeles / 80)
      : resultado == "svt"
      ? cantidadPapeles.push(`${cantidadMuestras.value * 4}`) &&
        kilosTotal.push(+cantidadPapeles / 125)
      : console.log("Codigo incorrecto");

    // let numerosPapeles = Number(cantidadPapeles[0]);
    console.log(cantidadPapeles);
    console.log(kilosTotal);

    let pesoPapeles =
      kilosTotal < 1
        ? `Necesitas ${kilosTotal * 1000} gramos de papel y ${
            cantidadMuestras.value * 2
          } trays`
        : kilosTotal > 1
        ? `Necesitas ${kilosTotal} kilos de papel y ${
            cantidadMuestras.value * 2
          } trays`
        : kilosTotal == 1
        ? `Necesitas ${kilosTotal} kilo de papel y ${
            cantidadMuestras.value * 2
          } trays`
        : "falso";
    console.log(pesoPapeles);

    // const resultadoFinal = document.getElementById("show-result");
    // resultadoFinal.textContent = pesoPapeles;
    alert(pesoPapeles);
    window.location.reload();
  });
});
