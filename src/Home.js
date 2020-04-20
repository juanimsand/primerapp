import React from 'react'

function Home() {
    let datos = {
        "Nombre": "Toshiba Satellite",
        "Descripcion": "Notebook color negra 17 pulgadas",
        "Precio": "48000",
        "Precio_oferta": "40000",
        "Cantidad": "12"
    }
    return (
        <div>
            <span>{datos.Nombre}<br></br>
                {datos.Descripcion}<br></br>
                {datos.Precio}<br></br>
                {datos.Precio_oferta}<br></br>
                {datos.Cantidad}</span>
        </div>
        );
}


export default Home;