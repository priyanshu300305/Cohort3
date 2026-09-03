import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log("hello i'm in main.jsx file");

createRoot(document.getElementById('root')).render(
  <App />
)

