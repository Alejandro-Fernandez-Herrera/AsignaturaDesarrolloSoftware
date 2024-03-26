import LogoutButton from "../../elements/LogOut";
import LoginButton from "../../elements/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
export function Header() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>User loading...</div>;
  }

  return <div>{!isAuthenticated ? <LoginButton /> : <LogoutButton />}</div>;
}
