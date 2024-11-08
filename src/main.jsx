import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MovieApp } from './movieApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieApp />
  </StrictMode>,
)