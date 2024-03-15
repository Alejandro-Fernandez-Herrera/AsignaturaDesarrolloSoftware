import LogoutButton from "../components/LogOut"
import LoginButton from "../components/LoginButton"
import { useAuth0 } from "@auth0/auth0-react";



export function LandingPage() {
  const { user, isAuthenticated } = useAuth0();

  console.log(user);
 

  
  return (
    <>
    <div>LandingPage</div>
   
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
    
    </> 
  )
}
