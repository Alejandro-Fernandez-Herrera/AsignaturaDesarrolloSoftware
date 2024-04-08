import React from 'react';
import LogoutButton from "../../elements/LogOut";
import LoginButton from "../../elements/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import './Header.css'; // Archivo CSS para estilos personalizados

export function Header() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>User loading...</div>;
  }

  return (
    <header className="header">
      <div className="logo">
        {/* Agrega aquí tu logotipo o imagen */}
      </div>
      <div className="nav-buttons">
        {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      </div>
    </header>
  );
}
