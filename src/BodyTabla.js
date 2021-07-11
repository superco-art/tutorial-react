import React from 'react';

const BodyTabla = (props) => {
    const filas = props.datosPersonas.map((fila, indice) => {
        return (
            <tr key={indice}>
                <td>{fila.nombre}</td>
                <td>{fila.apellido}</td>
                <td>
                    <button onClick={() => props.eliminarPersonas(indice)}>Eliminar</button>
                </td>
            </tr>
        );
    })

    return <tbody>{filas}</tbody>
}
export default BodyTabla;
