import { useContext } from 'react'
import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { NavLink } from "react-router-dom"
import { CarritoContext } from '../context/CarritoContext'

export const NavBar = () => {

    const { listaCompras } = useContext(CarritoContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">Carrito</NavLink>

                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Compras</NavLink>
                    </li>
                </ul>

                <NavLink to="/carrito" className="mx-3">
                    <Badge badgeContent={listaCompras.length} color="secondary">
                        <ShoppingCart color="action" />
                    </Badge>
                </NavLink>

            </div>
        </nav >
    )
}
