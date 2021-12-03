const h = new Date();

let hour = h.getHours();

if (hour > 9) {
    hour -= 12
    hour = ((hour < 10) ? "0" : "") + hour;
}

const minutes = ((h.getMinutes() < 10) ? "0" : "") + h.getMinutes();
const seconds = ((h.getSeconds() < 10) ? "0" : "") + h.getSeconds();

let hora = document.getElementById('hora');
hora.innerHTML = "<b>HORA: </b>" + hour + ":" + minutes + ":" + seconds;

const day = ((h.getDate() < 10) ? "0" : "") + h.getDate();
let month = ((h.getMonth() < 10) ? "0" : "") + h.getMonth();

if (month >= 0){
    month = parseInt(month) + 1
}
const year = ((h.getFullYear() < 10) ? "0" : "") + h.getFullYear();

let fecha = document.getElementById('fecha');
fecha.innerHTML = "<b>FECHA: </b>" + day + "/" + month + "/" + year;

//----------------------------------------------------------------



function calcularTotal(){
    let monto = document.getElementById("monto").value;
    let comision = 1;

    if (monto === ""){
        document.getElementById('total').value = "";
    }else{
        document.getElementById('total').value = comision + parseInt(monto);
    }

}


//----------------------------------------------------------------
function impresora(){
    //document.getElementById('contenido').style.marginRight = '0px';
    //document.getElementById('contenido').style.marginLeft = '0px';
    //document.getElementById('titulo').style.textAlign = 'center';
    document.body.style.textAlign = 'left';


    const titulo = document.getElementById('titulo').innerHTML;

    const fecha = document.getElementById('fecha').innerHTML;
    const hora = document.getElementById('hora').innerHTML

    const servicio = "<b>SERVICIO: </b>" + document.getElementById('servicio').value;
    const institucion = "<b>INSTITUCIÓN: </b>" + document.getElementById('institucion').value
    const documento = "<b>NÚMERO DE DOCUMENTO: </b>" + document.getElementById('documento').value;
    const cliente = "<b>CLIENTE: </b>" + document.getElementById('cliente').value;
    const operacion = "<b>NÚMERO DE OPERACIÓN: </b>"  + document.getElementById('op').value;
    const monto = "<b>MONTO: </b>" + document.getElementById('monto').value;
    const comision = "<b>COMISIÓN: </b>" + document.getElementById('comision').innerHTML
    const total = "<b>TOTAL A PAGAR: </b>" + document.getElementById('total').value;

    let salida = "⠀⠀⠀⠀⠀⠀⠀⠀" + titulo + '<br>' + '<br>' +
        fecha + '<br>' +
        hora + '<br>' + '<br>' +
        servicio + '<br>' +
        institucion + '<br>' +
        documento + '<br>' +
        cliente + '<br>' +
        operacion + '<br>' +
        monto + '<br>' +
        comision + '<br>' +
        total;

    let restorecontent = document.body.innerHTML;
    document.body.innerHTML = salida;
    window.print()
    document.body.innerHTML = restorecontent;

    //document.getElementById('imprimir').style.margin = 'auto';

}

