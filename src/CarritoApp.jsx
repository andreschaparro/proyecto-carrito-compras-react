// La API que se utiliza es: https://fakestoreapi.com/

import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ComprasScreen } from "./routes/ComprasScreen"
import { CarritoScreen } from "./routes/CarritoScreen"
import { ProductosProvider } from './context/ProductosProvider'
import { CarritoProvider } from "./context/CarritoProvider"

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ComprasScreen></ComprasScreen>}></Route>
                        <Route path="/carrito" element={<CarritoScreen></CarritoScreen>}></Route>
                        <Route path="/*" element={<Navigate to="/" />}></Route>
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}
