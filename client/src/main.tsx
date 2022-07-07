import React from 'react'
import ReactDOM from 'react-dom/client'
import { createClient, Provider } from 'urql';
import { FilterContextProvider } from "./Contexts/filter";
import App from './App'
import './index.css'

const client = createClient({
  url: '/graphql',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={client}>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </Provider>
  </React.StrictMode>
)
