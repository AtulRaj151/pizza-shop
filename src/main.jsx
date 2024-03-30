import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { NotifyProvider } from './helper/NotifyContext';
import Notification from './helper/Notification';
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <NotifyProvider>
        <Notification />
        <App />
      </NotifyProvider>
    </Provider>
  </React.StrictMode >,
)
