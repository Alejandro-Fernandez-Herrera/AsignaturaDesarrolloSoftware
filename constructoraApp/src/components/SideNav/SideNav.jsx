import { Link } from "react-router-dom";
import { withAuthorizationDisplay } from "../Auth/WithAuthorizationDisplay";

const UsersLink = withAuthorizationDisplay(
  () => (
    <span className="nav-link">
      <Link to="/dashboard/users" className="link">
        Usuarios
      </Link>
    </span>
  ),
  {
    roles: ["Gerente"],
  }
);

const BuildingsLink = withAuthorizationDisplay(
  () => (
    <span className="nav-link">
      <Link to="/dashboard/buildings" className="link">
        Obras
      </Link>
    </span>
  ),
  {
    roles: ["Gerente", "Director", "Capataz"],
  }
);

const Task = withAuthorizationDisplay(
  () => (
    <span className="nav-link">
      <Link to="/dashboard/tasks" className="link">
        Gestión De Tareas
      </Link>
    </span>
  ),
  {
    roles: ["Director"],
  }
);

const TaskManagement = withAuthorizationDisplay(
  () => (
    <span className="nav-link">
      <Link to="/dashboard/taskmanagement" className="link">
        Avance De Tareas
      </Link>
    </span>
  ),
  {
    roles: ["Director", "Capataz"],
  }
);

export function SideNav() {
  return (
    <div className="sidenav" id="sidebar-wrapper">
      <div className="sidebar-heading">Menú Principal</div>
      <div className="list-group list-group-flush">
        <Link to="/dashboard" className="list-group-item">
          Inicio
        </Link>
        <UsersLink />
        <BuildingsLink />
        <Task />
        <TaskManagement />
      </div>
    </div>
  );
}