import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Header } from "./components/Header/Header";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <BrowserRouter>
        <Auth0Provider
          domain="dev-aria802vns1qw1u8.us.auth0.com"
          clientId="xzXFfXrcqrKIxAGfDjtmXLwQxfBTx8uy"
          authorizationParams={{
            redirect_uri: "http://localhost:5173/dashboard",
            audience: "http://127.0.0.1:8000/",
          }}
        >
          <QueryClientProvider client={queryClient}>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
          </QueryClientProvider>
        </Auth0Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

