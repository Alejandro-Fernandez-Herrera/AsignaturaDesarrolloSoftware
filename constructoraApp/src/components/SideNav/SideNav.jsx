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
      className="bg-light border-right"
      id="sidebar-wrapper"
      style={{ width: "250px" }}
    >
      <div className="sidebar-heading">Menú Principal</div>
      <div className="list-group list-group-flush">
        <Link
          to="/dashboard"
          className="list-group-item list-group-item-action bg-light"
        >
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
