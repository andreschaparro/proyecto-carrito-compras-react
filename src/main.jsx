import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CarritoApp } from './CarritoApp'

// Ejecutar: npm install react-router-dom
import { BrowserRouter } from 'react-router-dom'

// Bootstrap se utiliza mediante npm: https://getbootstrap.com/
// Ejecutar: npm i bootstrap@5.3.3
import 'bootstrap/dist/css/bootstrap.css'

// Material UI se utiliza mediante npm: https://mui.com/material-ui/
// Ejecutar: npm install @mui/material @emotion/react @emotion/styled
// Ejecutar: npm install @mui/icons-material

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CarritoApp />
    </StrictMode>
  </BrowserRouter>
)
