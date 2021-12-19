const h = new Date();

let hour = h.getHours();

if (hour > 12) {
    hour -= 12
}

hour = ((hour < 10) ? "0" : "") + hour;

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
    
    let redondeado = comision + parseFloat(monto)

    if (monto === ""){
        document.getElementById('total').value = "";
    }else{
        document.getElementById('total').value = redondeado.toFixed(2);
    }

}


//----------------------------------------------------------------
function impresora(){
    const h2 = new Date();

    let hour = h2.getHours();

    if (hour > 12) {
    hour -= 12
    }

    hour = ((hour < 10) ? "0" : "") + hour;

    const minutes = ((h2.getMinutes() < 10) ? "0" : "") + h2.getMinutes();
    const seconds = ((h2.getSeconds() < 10) ? "0" : "") + h2.getSeconds();

    let hora_pag = document.getElementById('hora');
    hora_pag.innerHTML = "<b>HORA: </b>" + hour + ":" + minutes + ":" + seconds;

    const day = ((h2.getDate() < 10) ? "0" : "") + h2.getDate();
    let month = ((h2.getMonth() < 10) ? "0" : "") + h2.getMonth();

    if (month >= 0){
        month = parseInt(month) + 1
    }
    const year = ((h2.getFullYear() < 10) ? "0" : "") + h2.getFullYear();
    let fecha_pag = document.getElementById('fecha');
    fecha_pag.innerHTML = "<b>FECHA: </b>" + day + "/" + month + "/" + year;

    //------------------------
    document.body.style.textAlign = 'left';


    const titulo = document.getElementById('titulo').innerHTML;

    const fecha = "<b>FECHA: </b>" + day + "/" + month + "/" + year;
    const hora = "<b>HORA: </b>" + hour + ":" + minutes + ":" + seconds;

    const servicio = "<b>SERVICIO: </b>" + document.getElementById('servicio').value;

    const agente = "<b>AGENTE: </b>" + document.getElementById('agente').value;

    const institucion = "<b>INSTITUCIÓN: </b>" + document.getElementById('institucion').value
    const documento = "<b>NRO DE DOC: </b>" + document.getElementById('documento').value;
    const cliente = "<b>CLIENTE: </b>" + document.getElementById('cliente').value;
    const operacion = "<b>NRO DE OP: </b>"  + document.getElementById('op').value;
    const monto = "<b>MONTO: </b> S/" + document.getElementById('monto').value;
    const comision = "<b>COMISIÓN: </b>" + document.getElementById('comision').innerHTML
    const total = "<b>TOTAL A PAGAR: </b> S/" + document.getElementById('total').value;

    let salida = titulo + '<br>' + '<br>' +
        fecha + '<br>' +
        hora + '<br>' + '<br>' +
        servicio + '<br>' +
        agente + '<br>' +
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

