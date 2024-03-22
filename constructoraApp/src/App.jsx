import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from '@auth0/auth0-react';
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
    <Auth0Provider
    domain="dev-aria802vns1qw1u8.us.auth0.com"
    clientId="xzXFfXrcqrKIxAGfDjtmXLwQxfBTx8uy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            

          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Auth0Provider>
      
    </>
  )
}

export default App
