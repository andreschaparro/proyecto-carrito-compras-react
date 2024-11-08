import { useState } from 'react'
import '../styles/Tarjeta.css'

export const Tarjeta = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar }) => {

    const [agregado, setAgregado] = useState(false)

    const clickQuitar = () => {
        handleQuitar()
        setAgregado(false)
    }

    const clickAgregar = () => {
        handleAgregar()
        setAgregado(true)
    }

    return (
        <div className="card w-100 p-3 mb-3">
            <div className="d-flex flex-nowrap">
                <div className="card-body w-75">
                    <h5 className="card-title">{titulo} </h5>
                    <p className="card-text">{descripcion}</p>
                    <h4 className="card-text">{precio}</h4>
                    {
                        agregado
                            ? <button
                                type="button"
                                onClick={clickQuitar}
                                className="btn btn-danger">
                                Quitar del 🛒
                            </button>
                            : <button type="button"
                                onClick={clickAgregar}
                                className="btn btn-success">
                                Agregar al 🛒
                            </button>
                    }
                </div>
                <div className="w-25">
                    <img className="d-block card-img-custom" src={imagen} alt={titulo} />
                </div>
            </div>
        </div >
    )
}
