import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WordGenerator from './WordGenerator.jsx'
import './WordGenerator.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WordGenerator />
  </StrictMode>,
)
