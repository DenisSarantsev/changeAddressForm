import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.jsx';
import { ContextProvider } from './components/ContextProvider/ContextProvider.jsx';
import "./assets/js/scripts.js";

// styles
import './index.scss'
import './assets/styles/nullstyle.scss'
import './assets/styles/common.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<ContextProvider>
			<App/>
		</ContextProvider>
  </React.StrictMode>,
)
