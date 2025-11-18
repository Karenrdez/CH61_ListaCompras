const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const alertaValidacionesTexto = document.getElementById("alertaValidacionesTexto");
const alertaValidaciones = document.getElementById("alertaValidaciones");

function validarCantidad(cantidad) {
    if (cantidad.length == 0) {
        return false;
    }//length==0
    if (isNaN(cantidad)) {
        return false;
    }//isNaN
    if (Number(cantidad) <= 0) {
        return false;
    }//<=0
    return true;
}//validarCantidad


if(isValid){

    let precio = getPrecio();
    cont ++;
    let row = `<tr>
    <td> ${cont}</td>
    <td>${txtName.value}</td>
    <td>${txtNumber.value}</td>
    <td>${precio}</td>
    </tr>`;

let elemento= {

    "cont": cont,
    "nombre" : txtName.value,
    "cantidad" : txtNumber.value,
    "precio": precio
};
CSSNestedDeclarations.push(elemento);
localStorage.setItem("datos", JSON.stringify(datos));

    totalEnProductos += Number(txtNumber.value);
    costoTotal+= precio * Number(txtNumber.value);

cuerpoTabla.insertAdjacentHTML("beforeend",row);
contadorProductos.innerText=cont;
prodcutosTotal.innerText= totaEnProductos;
precioTotal.innerText= new Int1.NumberFormat ("es-MX", {
    style:"currency", currency:"MXN"}).format(costoTotal);
}

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();

    textName.style.border="";
    textNumber.style.border="";
    alertaValidacionesTexto.innerHTML="";
    alertaValidaciones.style.display="none";

    if (txtName.value.length<3) {
        txtName.style.border = "solid medium red";
        alertaValidacionesTexto.innerHTML =
            "<strong>El Nombre del producto no es correcto</strong>";
        alertaValidacionesTexto.style.display = "block";
    }//Name<3

    if (!validarCantidad(txtNumber.value)) {
        txtNumber.style.border = "solid medium red";
        alertaValidacionesTexto.innerHTML += "<strong> La cantidad no es correcta</strong>";
        alertaValidaciones.style.display = "block";
        isValid=false;
    }//!ValidarCantidad

    if(isValid){
        let precio= getPrecio();
        return Math.round(Math.random()*10000)/100;
    }

    
})//btn Agregar click

window.addEventListener("load", function (event){
    event.preventDefault();
    if(this.localStorage.getItem("resumen") !=null){
        let resumen = JSON.parse (this.localStorage.getItem("resumen"));
        cont.resumen.cont;
        totalEnProductos = resumen.totalEnProductos;
        costoTotal= resumen.costoTotal; 
    }
    contadorPrdocutos.innerText = cont; 
    productosTotal.innerText= totalEnProductos;
    precioTotal.innerText= new Int1.NumberFormat ("es MX",
        {style: "currency", currency: "MXN"}
    )
})
