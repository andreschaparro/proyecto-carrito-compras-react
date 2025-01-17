import { useEffect, useState } from 'react'
import { ProductosContext } from './ProductosContext'

export const ProductosProvider = ({ children }) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetchProductos()
    }, [])

    const fetchProductos = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
            setProductos(data)
        } catch (error) {
            console.error('Ocurrió el siguiente problema: ', error)
        }
    }

    return (
        <ProductosContext.Provider value={{ productos }}>
            {children}
        </ProductosContext.Provider>
    )
}
