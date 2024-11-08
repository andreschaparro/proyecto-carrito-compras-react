import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const CarritoScreen = () => {

    const { listaCompras, eliminarCompra, aumentarCantidad, disminuirCantidad } = useContext(CarritoContext)

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => (total + item.price * item.cantidad), 0).toFixed(2)

    }

    const handleImpresion = () => {
        print()
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCompras.map(item => (
                            <tr key={item.id}>
                                <th scope="row">{item.title}</th>
                                <td>${item.price}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button
                                            type="button"
                                            onClick={() => disminuirCantidad(item.id)}
                                            className="btn btn-outline-primary">
                                            ➖
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary">
                                            {item.cantidad}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => aumentarCantidad(item.id)}
                                            className="btn btn-outline-primary">
                                            ➕
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => eliminarCompra(item.id)}
                                        className="btn btn-danger">
                                        Elimintar ⛔
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    <tr scope="col">
                        <th scope="row">Total: </th>
                        <td></td>
                        <td></td>
                        <td>${calcularTotal()}</td>
                    </tr>
                </tbody>
            </table>
            <div className="text-center">
                <button
                    type="button"
                    onClick={handleImpresion}
                    className="btn btn-primary"
                    disabled={listaCompras.length < 1}>
                    Comprar 💰
                </button>
            </div>
        </>
    )
}
