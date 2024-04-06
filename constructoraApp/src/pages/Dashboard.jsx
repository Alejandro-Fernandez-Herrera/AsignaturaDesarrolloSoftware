import { Routes, Route } from "react-router-dom";
import { SideNav } from "../components/SideNav/SideNav";
import { UserManagement } from "../components/UserManagement/UserManagement";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { BuildingManagement } from "../components/BuildingManagement/BuildingManagement";
function DashboardComponent() {
  return (
    <div style={{ display: "flex", border: "1px solid #AEAEAE" }}>
      <SideNav />
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/users/:id" element={<UserManagement />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/buildings" element={<BuildingManagement />} />
        <Route path="/tasks" element={<div>Tasks</div>} />
        <Route path="/taskmanagement" element={<div>Taskmanagement</div>} />
      </Routes>
    </div>
  );
}
export const Dashboard = withAuthenticationRequired(DashboardComponent);
