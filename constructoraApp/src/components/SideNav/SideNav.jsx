import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";
import { withAuthorizationDisplay } from "../Auth/WithAuthorizationDisplay";

const UsersLink = withAuthorizationDisplay(
  () => (
    <span>
      <Link to="/dashboard/users">Usuarios</Link>
    </span>
  ),
  {
    roles: ["Gerente"],
  }
);
const BuildingsLink = withAuthorizationDisplay(
  () => (
    <span>
      <Link to="/dashboard/buildings">Obras</Link>
    </span>
  ),
  {
    roles: ["Gerente", "Director", "Capataz"],
  }
);
const Task = withAuthorizationDisplay(
  () => (
    <span>
      <Link to="/dashboard/tasks">Gestión De Tareas</Link>
    </span>
  ),
  {
    roles: ["Director"],
  }
);
const TaskManagement = withAuthorizationDisplay(
  () => (
    <span>
      <Link to="/dashboard/taskmanagement">Avance De Tareas</Link>
    </span>
  ),
  {
    roles: ["Director", "Capataz"],
  }
);

export function SideNav() {
  return (
    <div
      style={{
        display: "flex",
        width: "250px",
        padding: "10px",
        flexDirection: "column",
        border: "1px dashed #E2E2E2",
      }}
    >
      <NavLink to="/dashboard">Inicio</NavLink>
      <UsersLink />
      <BuildingsLink />
      <Task />
      <TaskManagement />
    </div>
  );
}
