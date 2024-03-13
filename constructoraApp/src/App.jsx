import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import {UsersPage} from "./pages/UsersPage"
import {UserFormPage} from "./pages/UserFormPage"
import {LandingPage} from "./pages/LandingPage"
import { QueryClient, QueryClientProvider } from "react-query";


function App() {
  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="/users-create" element={<UserFormPage/>}/>

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
      
    </>
  )
}

export default App
