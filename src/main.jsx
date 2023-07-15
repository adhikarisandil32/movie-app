import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './store/store.jsx'

//<React.StrictMode>...</React.StrictMode> removed to stop rerendering useEffect twice

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
      <App />
    </ContextProvider>,
)
