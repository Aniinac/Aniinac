import React, { Fragment, useState, useEffect } from 'react';


function Formulario(props) {

    const [count, setCount] = useState(0);
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
        telefono: '',
        edad: '',
        email: ''
    })

    useEffect(() => {
        document.title = (`Documentos creados: ${count}`);

    })


    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const crearDocumento = (event) => {
        event.preventDefault()
        alert(`Documento Creado #${count} ${'\n'     + 
            'Nombre: ' + datos.nombre       + '\n' +
            'Apellido: ' + datos.apellido   + '\n' +
            'Cedula: '   + datos.cedula     + '\n' +
            'Telefono: ' + datos.telefono   + '\n' +
            'Edad: '     + datos.edad       + '\n' +
            'Email: '    + datos.email}`);
        event.target.reset()
        //console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)  
    }
    return (
    <Fragment>
      <div className="offset-md-4">
        <h2 >Formulario Lumarketo SPA</h2>
      </div>
      <form className="row"
        onSubmit={crearDocumento}>
        <div className="col-md-4 offset-md-4 mt-1">
          <input
            type="text"
            placeholder="Nombre"
            className="form-control"
            onChange={handleInputChange}
            name="nombre"></input>
        </div>
        <div className="col-md-4 offset-md-4 mt-1">
          <input type="text"
            placeholder="Apellido"
            className="form-control"
            onChange={handleInputChange}
            name="apellido"></input>
        </div>
        <div className="col-md-4 offset-md-4 mt-1">
          <input type="text"
            placeholder="Cédula"
            className="form-control"
            onChange={handleInputChange}
            name="cedula"></input>
        </div>
        <div className="col-md-4 offset-md-4 mt-1">
          <input type="text"
            placeholder="Teléfono"
            className="form-control"
            onChange={handleInputChange}
            name="telefono"></input>
        </div>
        <div className="col-md-4 offset-md-4 mt-1">
          <input type="text"
            placeholder="Edad"
            className="form-control"
            onChange={handleInputChange}
            name="edad"></input>
        </div>
          <div className="col-md-4 offset-md-4 mt-1">
          <input type="text"
            placeholder="Email"
            className="form-control"
            onChange={handleInputChange}
            name="email"></input>
        </div>
         <div className="col-md-4 offset-md-5">
             <button
                onClick={()=>setCount(count + 1)}
                type="submit"
                className="btn btn-primary mt-1 ">
                     Crear Documento
            </button>
         </div>
        {/* <button type="submit"
          className="btn btn-primary">
          <Link to="./Dashboard" exact >
            Dashborad
                  </Link></button> */}
      </form>
      </Fragment>
    );
}
export default Formulario; 