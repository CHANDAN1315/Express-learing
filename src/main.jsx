import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import './index.css'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
