import { useReducer } from 'react'
import { CarritoContext } from './CarritoContext'

const InitialState = []

export const CarritoProvider = ({ children }) => {

    const comprasReducer = (state = InitialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO] Agregar Compra':
                return [...state, action.payload]
            case '[CARRITO] Aumentar Cantidad':
                return state.map(item => {
                    if (item.id === action.payload) {
                        const nuevaCantidad = item.cantidad + 1
                        return { ...item, cantidad: nuevaCantidad }
                    }
                    return item
                })
                break;
            case '[CARRITO] Disminuir Cantidad':
                return state.map(item => {
                    if (item.id === action.payload && item.cantidad > 0) {
                        const nuevaCantidad = item.cantidad - 1
                        return { ...item, cantidad: nuevaCantidad }
                    }
                    return item
                })
                break;
            case '[CARRITO] Eliminar Compra':
                return state.filter(compra => compra.id !== action.payload)
            default:
                return state;
        }
    }

    const [listaCompras, dispatch] = useReducer(comprasReducer, InitialState)

    const agregarCompra = (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[CARRITO] Agregar Compra',
            payload: compra
        }
        dispatch(action)
    }

    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad',
            payload: id
        }
        dispatch(action)
    }

    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad',
            payload: id
        }
        dispatch(action)
    }

    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: id
        }
        dispatch(action)
    }

    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    )
}