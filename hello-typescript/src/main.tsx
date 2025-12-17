import { StrictMode } from 'react'
import { createRoot, type Container } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!;

function main(container: Container) {

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

}

main(container);