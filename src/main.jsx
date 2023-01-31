import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "tailwindcss/tailwind.css"
import {Provider} from "react-redux"
import store from "./utils/redux/store"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
